import { I18nService } from '../i18n.service';
import { FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from '../languages';

export function initTranslationFactory(i18nService: I18nService): () => void {
  return () => {
    const browserLang = i18nService.getBrowserLang();
    const isBrowserLangSupported = SUPPORTED_LANGUAGES.find(
      (lang) => lang === browserLang
    );
    const initialLang =
      browserLang && isBrowserLangSupported ? browserLang : FALLBACK_LANGUAGE;

    i18nService.addLangs([...SUPPORTED_LANGUAGES]);
    i18nService.setFallbackLanguage(FALLBACK_LANGUAGE);
    i18nService.useLanguage(initialLang);

    if (initialLang && typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', initialLang);
    }
  };
}
