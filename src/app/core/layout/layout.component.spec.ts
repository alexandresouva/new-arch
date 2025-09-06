import { TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { I18nService } from '../i18n/i18n.service';
import { setupI18nServiceMock } from '@shared/test/mocks/services/i18n.service.mock';
import { Language } from '@ngx-translate/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { LANGUAGE_MAP } from '../i18n/languages';

async function setup() {
  const { i18nServiceMock, i18nServiceHandlers } = setupI18nServiceMock();

  await TestBed.configureTestingModule({
    imports: [LayoutComponent],
    providers: [{ provide: I18nService, useValue: i18nServiceMock }]
  }).compileComponents();

  const fixture = TestBed.createComponent(LayoutComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();

  return { fixture, component, i18nServiceMock, i18nServiceHandlers };
}

describe('LayoutComponent', () => {
  it('should create', async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it('should call I18nService.useLanguage with the correct language', async () => {
    const { component, i18nServiceMock } = await setup();
    const language: Language = 'pt-BR';
    const event: MatButtonToggleChange = {
      value: language
    } as MatButtonToggleChange;

    component['useLanguage'](event);

    expect(i18nServiceMock.useLanguage).toHaveBeenCalledWith(language);
  });

  it('should return all languages with correct checked', async () => {
    const { component, i18nServiceHandlers } = await setup();
    const mockLanguage: Language = 'pt-BR';

    i18nServiceHandlers.currentLanguageSignal.set(mockLanguage);
    const languages = component['languages']();
    const currentLanguage = languages.find((l) => l.code === mockLanguage);
    const otherLanguages = languages.filter((l) => l.code !== mockLanguage);

    expect(languages.length).toBe(Object.keys(LANGUAGE_MAP).length);
    expect(currentLanguage?.checked).toBeTrue();
    expect(otherLanguages.every((l) => !l.checked)).toBeTrue();
  });
});
