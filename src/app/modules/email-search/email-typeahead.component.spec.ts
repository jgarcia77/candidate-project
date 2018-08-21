import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmailTypeaheadComponent } from './email-typeahead.component';
import { EmailApiService } from './email-api.service';
import { Observable } from 'rxjs';

describe('EmailTypeaheadComponent', () => {
  let service: EmailApiService;
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
    service = TestBed.get(EmailApiService);
    fixture = TestBed.createComponent(EmailTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('api returns results', () => {
    component.searchValue = 'Josh';
    spyOn(service, 'searchByName').and.callFake(() => {
      return Observable.create(observer => {
        observer.next({ users: [{ email: 'email@domain.com' }, { email: 'email2@domain.com' }] });
      });
    });
    component.search();
    expect(service.searchByName).toHaveBeenCalled();
    expect(component.searchResults.length).toBe(2);
  });
});
