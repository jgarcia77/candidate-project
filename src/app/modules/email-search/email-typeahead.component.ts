import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { EmailApiService } from './email-api.service';

@Component({
  selector: 'app-email-typeahead',
  templateUrl: './email-typeahead.component.html',
  styleUrls: ['./email-typeahead.component.scss']
})
export class EmailTypeaheadComponent implements OnInit {
  @Input() max: number;
  @Input() searchValue: string;
  @Output() searchValueChange = new EventEmitter();
  @Output() selected: EventEmitter<string> = new EventEmitter();
  public searchResults: any[] = [];

  constructor(private serivce: EmailApiService) { }

  ngOnInit() {}

  public search(): void {
    this.searchValueChange.emit(this.searchValue);
    if (this.searchValue) {
      this.serivce.searchByName(this.searchValue).subscribe(result => {
        this.searchResults = result['users'];
      }, error => {
        this.searchResults = [];
      });
    } else {
      this.searchResults = [];
    }
  }

  public select(user): void {
    if (this.max === 1) {
      this.searchValue = user.email;
    }
    this.searchResults = [];
    this.selected.emit(user.email);
  }

  public showSearchResults(): boolean {
    return this.searchResults && this.searchResults.length !== 0;
  }

  public checkEnterKey(event, user) {
    const code = event.keyCode ? event.keyCode : event.which;
    if (code === 13) {
      this.select(user);
    }
  }

  public checkArrowKeys(event, itemNumber) {
    const code = event.keyCode ? event.keyCode : event.which;
    switch (code) {
      case 38: // key up
        if (event.srcElement.previousElementSibling) {
          event.srcElement.previousElementSibling.focus();
        }
        break;

      case 40: // key down
        if (event.srcElement.nextElementSibling) {
          event.srcElement.nextElementSibling.focus();
        }
        break;

      default:
        break;
    }
  }
}
