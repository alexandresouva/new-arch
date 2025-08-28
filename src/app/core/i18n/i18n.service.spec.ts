import { TestBed } from '@angular/core/testing';

import { I18nService } from './i18n.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

async function setup() {
  const langChangeSubject = new Subject<LangChangeEvent>();

  const translateServiceSpy = jasmine.createSpyObj<TranslateService>(
    'TranslateService',
    ['addLangs', 'use', 'setFallbackLang', 'instant', 'getBrowserCultureLang'],
    {
      onLangChange: langChangeSubject.asObservable()
    }
  );

  await TestBed.configureTestingModule({
    providers: [
      I18nService,
      { provide: TranslateService, useValue: translateServiceSpy }
    ]
  }).compileComponents();

  const service = TestBed.inject(I18nService);

  return { service, translateServiceSpy };
}

describe('I18nService', () => {
  it('should be created', async () => {
    const { service } = await setup();
    expect(service).toBeTruthy();
  });

  it('should call translateService.addLangs with supported languages', async () => {
    const { service, translateServiceSpy } = await setup();
    const languages = ['en', 'es'];

    service.addLangs(languages);

    expect(translateServiceSpy.addLangs).toHaveBeenCalledWith(languages);
  });

  it('should call TranslateService.use with selected language', async () => {
    const { service, translateServiceSpy } = await setup();
    const language = 'en';

    service.useLanguage(language);

    expect(translateServiceSpy.use).toHaveBeenCalledWith(language);
  });
});
