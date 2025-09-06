import { I18nPipe } from '@core/i18n/pipes/i18n.pipe';

export function setupI18nPipeMock(): {
  i18nPipeMock: jasmine.SpyObj<I18nPipe>;
} {
  const i18nPipeMock = jasmine.createSpyObj<I18nPipe>('I18nPipe', [
    'transform'
  ]);

  return { i18nPipeMock };
}
