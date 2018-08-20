import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposeEmailComponent } from './pages/compose-email/compose-email.component';
import { EmailSearchModule } from './modules/email-search/email-search.module';

@NgModule({
  declarations: [
    AppComponent,
    ComposeEmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    EmailSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
