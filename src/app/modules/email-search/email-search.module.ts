import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailTypeaheadComponent } from './email-typeahead.component';
import { EmailApiService } from './email-api.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EmailTypeaheadComponent],
  exports: [EmailTypeaheadComponent],
  providers: [EmailApiService]
})
export class EmailSearchModule { }
