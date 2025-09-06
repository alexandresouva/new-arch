import { I18nService } from '@core/i18n/i18n.service';
import { signal, WritableSignal } from '@angular/core';
import { Language } from '@ngx-translate/core';
import { FALLBACK_LANGUAGE } from '@core/i18n/languages';

export interface I18nServiceHandlers {
  currentLanguageSignal: WritableSignal<Language>;
}

export function setupI18nServiceMock(): {
  i18nServiceMock: jasmine.SpyObj<I18nService>;
  i18nServiceHandlers: I18nServiceHandlers;
} {
  const currentLanguageSignal = signal<Language>(FALLBACK_LANGUAGE);

  const i18nServiceMock = jasmine.createSpyObj<I18nService>(
    'I18nService',
    [
      'addLangs',
      'useLanguage',
      'setFallbackLanguage',
      'translate',
      'getBrowserLang'
    ],
    { currentLanguage: currentLanguageSignal.asReadonly() }
  );

  const i18nServiceHandlers: I18nServiceHandlers = {
    currentLanguageSignal
  };

  return { i18nServiceMock, i18nServiceHandlers };
}
