import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmailApiService } from './email-api.service';

describe('EmailApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EmailApiService]
    });
  });

  it('should be created', inject([EmailApiService], (service: EmailApiService) => {
    expect(service).toBeTruthy();
  }));
});
