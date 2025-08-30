import { Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { I18nService } from '../i18n.service';

@Pipe({
  name: 'i18nDate',
  standalone: true,
  pure: false
})
@Injectable({
  providedIn: 'root'
})
export class I18nDatePipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(
    value: string | Date | null | undefined,
    format = 'short',
    timezone?: string
  ): string | null {
    if (!value) return null;

    const pipe = new DatePipe(this.i18n.currentLanguage());
    return pipe.transform(value, format, timezone);
  }
}
