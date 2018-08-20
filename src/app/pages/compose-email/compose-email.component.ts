import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmailApiService } from '../../modules/email-search/email-api.service';

@Component({
  selector: 'app-compose-email',
  templateUrl: './compose-email.component.html',
  styleUrls: ['./compose-email.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComposeEmailComponent implements OnInit {
  public statusClassName: string;
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
    this.data.to = email;
  }

  public ccEmailSelected(email): void {
    this.data.cc.push(email);
  }

  public submit(): void {
    if (this.disableSubmission()) {
      return;
    }

    this.responseMessage = '';
    this.service.submit(this.data).subscribe(result => {
      this.handleSuccess();
    }, error => {
      this.handleFailure(error);
    });
  }

  public disableSubmission(): boolean {
    if (this.data.to && this.data.subject && this.data.body) {
      return false;
    }

    return true;
  }

  private setStatusError(): void {
    this.statusClassName = 'error';
  }

  private setStatusSuccess(): void {
    this.statusClassName = 'success';
  }

  private handleSuccess(): void {
      this.setStatusSuccess();
      this.responseMessage = 'Your email has been submitted';
      this.toSearchValue = '';
      this.ccSearchValue = '';
      this.data.to = '';
      this.data.cc = [];
      this.data.subject = '';
      this.data.body = '';
  }

  private handleFailure(error): void {
    this.setStatusError();
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
  }
}
