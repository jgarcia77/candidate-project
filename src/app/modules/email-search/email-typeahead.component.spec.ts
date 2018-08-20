import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmailTypeaheadComponent } from './email-typeahead.component';
import { EmailApiService } from './email-api.service';

describe('EmailTypeaheadComponent', () => {
  let component: EmailTypeaheadComponent;
  let fixture: ComponentFixture<EmailTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ EmailTypeaheadComponent ],
      providers: [EmailApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
