import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmailApiService } from '../../modules/email-search/email-api.service';

@Component({
  selector: 'app-compose-email',
  templateUrl: './compose-email.component.html',
  styleUrls: ['./compose-email.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComposeEmailComponent implements OnInit {
  public toSearchValue: string;
  public ccSearchValue: string;

  public data = {
    'to': '',
    'cc': [],
    'subject': '',
    'body': ''
  };

  public responseMessage: string;

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
      this.responseMessage = 'Your email has been submitted';
      this.toSearchValue = '';
      this.ccSearchValue = '';
      this.data.to = '';
      this.data.cc = [];
      this.data.subject = '';
      this.data.body = '';
    }, error => {
      console.log(error);
      switch (error.status) {
        case 400:
          this.responseMessage = 'Your submission was invalid';
          break;

        case 500:
        this.responseMessage = 'Your submission was unsuccessful, please try again';
          break;

        default:
          this.responseMessage = 'An error has occurred';
          break;
      }
    });
  }
}
