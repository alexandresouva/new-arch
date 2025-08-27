type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const SUPPORTED_LANGUAGES = ['en-US', 'pt-BR', 'es-ES'] as const;
export const FALLBACK_LANGUAGE: Language = 'pt-BR';

export const LANGUAGE_MAP: Record<Language, string> = {
  'en-US': 'English',
  'pt-BR': 'Português',
  'es-ES': 'Español'
};
