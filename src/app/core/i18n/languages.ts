import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';

type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const SUPPORTED_LANGUAGES = ['en-US', 'pt-BR', 'es-ES'] as const;
export const FALLBACK_LANGUAGE: Language = 'pt-BR';

export const LANGUAGE_MAP: Record<Language, string> = {
  'en-US': 'English',
  'pt-BR': 'Português',
  'es-ES': 'Español'
};

export const LOCALE_MAP: Record<Language, unknown> = {
  'en-US': localeEn,
  'pt-BR': localePt,
  'es-ES': localeEs
};
