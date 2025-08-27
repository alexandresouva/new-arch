import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MatButtonToggleChange,
  MatButtonToggleModule
} from '@angular/material/button-toggle';
import { I18nService } from '../i18n/i18n.service';
import { LANGUAGE_MAP } from '../i18n/languages';
import { Language } from '@ngx-translate/core';
import { I18nPipe } from '../i18n/pipes/i18n.pipe';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    MatTabsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    I18nPipe
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  private readonly _i18nService = inject(I18nService);

  protected readonly languages = computed(() => {
    const currentLanguage = this._i18nService.currentLanguage();

    return Object.entries(LANGUAGE_MAP).map(([code, name]) => ({
      name,
      code,
      checked: code === currentLanguage
    }));
  });

  protected readonly year = new Date().getFullYear();

  protected useLanguage({ value: language }: MatButtonToggleChange): void {
    this._i18nService.useLanguage(language as Language);
  }
}
