import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { EmailApiService } from './email-api.service';

@Component({
  selector: 'app-email-typeahead',
  templateUrl: './email-typeahead.component.html',
  styleUrls: ['./email-typeahead.component.scss']
})
export class EmailTypeaheadComponent implements OnInit {
  @Input() max: number;
  @Output() selected: EventEmitter<string> = new EventEmitter();

  public searchValue: string;
  public users: any[] = [];

  constructor(private serivce: EmailApiService) { }

  ngOnInit() {}

  public search(): void {
    if (this.searchValue) {
      this.serivce.searchByName(this.searchValue).subscribe(result => {
        this.users = result['users'];
      }, error => {
        this.users = [];
      });
    } else {
      this.users = [];
    }
  }

  public select(user): void {
    if (this.max === 1) {
      this.searchValue = user.email;
    }
    this.users = [];
    this.selected.emit(user.email);
  }
}
