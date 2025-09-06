import { I18nDatePipe } from '@core/i18n/pipes/i18n-date.pipe';

export function setupI18nDatePipeMock(): {
  i18nDatePipeMock: jasmine.SpyObj<I18nDatePipe>;
} {
  const i18nDatePipeMock = jasmine.createSpyObj<I18nDatePipe>('I18nDatePipe', [
    'transform'
  ]);

  return { i18nDatePipeMock };
}
