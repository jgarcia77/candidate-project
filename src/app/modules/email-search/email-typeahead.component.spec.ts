import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTypeaheadComponent } from './email-typeahead.component';

describe('EmailTypeaheadComponent', () => {
  let component: EmailTypeaheadComponent;
  let fixture: ComponentFixture<EmailTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTypeaheadComponent ]
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
