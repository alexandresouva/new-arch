import { Provider, EnvironmentProviders, APP_INITIALIZER } from '@angular/core';
import { I18nService } from '../i18n.service';
import { initTranslationFactory } from '../initializers/i18n.initializer';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

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
