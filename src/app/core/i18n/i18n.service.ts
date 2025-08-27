import { inject, Injectable } from '@angular/core';
import { Language, TranslateService } from '@ngx-translate/core';
import { FALLBACK_LANGUAGE } from './languages';
import { filter, map, Observable, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly translateService = inject(TranslateService);

  currentLanguage = toSignal(this.onLangChange$(), {
    initialValue: FALLBACK_LANGUAGE
  });

  addLangs(languages: Language[]): void {
    this.translateService.addLangs(languages);
  }

  useLanguage(language: Language): void {
    this.translateService.use(language);
  }

  setFallbackLanguage(lang: Language): void {
    this.translateService.setFallbackLang(lang);
  }

  translate(key: string): string | undefined {
    return this.translateService.instant(key) as string | undefined;
  }

  getBrowserLang(): Language | undefined {
    return this.translateService.getBrowserCultureLang();
  }

  private setHtmlLangAttribute(lang: string): void {
    if (lang && typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', lang);
    }
  }

  private onLangChange$(): Observable<Language> {
    return this.translateService.onLangChange.pipe(
      map(({ lang }) => lang),
      filter(Boolean),
      tap((lang) => this.setHtmlLangAttribute(lang))
    );
  }
}
