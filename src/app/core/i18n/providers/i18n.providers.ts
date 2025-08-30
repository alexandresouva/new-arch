import { registerLocaleData } from '@angular/common';
import { Provider, EnvironmentProviders, APP_INITIALIZER } from '@angular/core';
import { I18nService } from '../i18n.service';
import { initTranslationFactory } from '../initializers/i18n.initializer';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { LOCALE_MAP } from '../languages';

Object.entries(LOCALE_MAP).forEach(([lang, localeData]) => {
  registerLocaleData(localeData, lang);
});

export function provideTranslation(): (Provider | EnvironmentProviders)[] {
  return [
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/'
      })
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslationFactory,
      deps: [I18nService],
      multi: true
    }
  ];
}
