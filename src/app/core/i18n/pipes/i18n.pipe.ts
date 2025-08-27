import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from '../i18n.service';

@Pipe({
  name: 'i18n',
  standalone: true,
  pure: false
})
export class I18nPipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(key: string): string {
    return this.i18n.translate(key) ?? key;
  }
}
