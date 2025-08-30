import { Component, computed, inject } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeStore } from './stores/home.store';
import { tableHeadersData } from './constants/table-header';
import { I18nDatePipe } from '@app/core/i18n/pipes/i18n-date.pipe';
import { JourneyStatusPipe } from './pipes/journey-status.pipe';

@Component({
  standalone: true,
  template: `
    <app-home [journeys]="journeys()" [tableHeaders]="tableHeaders" />
  `,
  imports: [HomeComponent],
  providers: [HomeStore]
})
export class HomeContainer {
  private readonly i18nDate = inject(I18nDatePipe);
  private readonly journeyStatus = inject(JourneyStatusPipe);
  private readonly homeStore = inject(HomeStore);

  protected readonly tableHeaders = tableHeadersData;

  protected readonly journeys = computed(() =>
    this.homeStore.journeys().map((journey) => ({
      ...journey,
      statusCode: this.journeyStatus.transform(journey.statusCode) ?? '',
      creationDate: this.i18nDate.transform(journey.creationDate) ?? '',
      lastUpdateDate: this.i18nDate.transform(journey.lastUpdateDate) ?? ''
    }))
  );
}
