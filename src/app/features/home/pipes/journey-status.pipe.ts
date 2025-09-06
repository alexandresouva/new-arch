import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { JourneyStatusCode } from '@shared/models/journey.model';

@Pipe({
  name: 'journeyStatus',
  standalone: true
})
@Injectable({
  providedIn: 'root'
})
export class JourneyStatusPipe implements PipeTransform {
  transform(journeyStatusCode: JourneyStatusCode): string | null {
    const statusDescription = JourneyStatusCode[journeyStatusCode];
    if (!statusDescription) return null;

    return `shared.journeyStatus.${statusDescription.toLowerCase()}`;
  }
}
