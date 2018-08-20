import { EmailSearchModule } from './email-search.module';

describe('EmailSearchModule', () => {
  let emailSearchModule: EmailSearchModule;

  beforeEach(() => {
    emailSearchModule = new EmailSearchModule();
  });

  it('should create an instance', () => {
    expect(emailSearchModule).toBeTruthy();
  });
});
