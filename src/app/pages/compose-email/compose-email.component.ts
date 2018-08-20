import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmailApiService } from '../../modules/email-search/email-api.service';

@Component({
  selector: 'app-compose-email',
  templateUrl: './compose-email.component.html',
  styleUrls: ['./compose-email.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComposeEmailComponent implements OnInit {
  public toEmail: string;
  public ccEmail: string[] = [];
  public subject: string;
  public body: string;

  public data = {
    'to': '',
    'cc': [],
    'subject': '',
    'body': ''
  };

  constructor(private service: EmailApiService) { }

  ngOnInit() {
  }

  public toEmailSelected(email): void {
    console.log('to email', email);
    this.data.to = email;
  }

  public ccEmailSelected(email): void {
    console.log('cc email', email);
    this.data.cc.push(email);
  }

  public submit(): void {
    this.service.submit(this.data).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
      switch (error.status) {
        case 400:
          console.error('your submission was invalid');
          break;

        case 500:
          console.error('your submission was unsuccessful, please try again');
          break;

        default:
          console.error('en error has occurred');
          break;
      }
    });
  }
}
