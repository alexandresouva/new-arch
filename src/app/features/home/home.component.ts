import { Component, computed, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { I18nPipe } from '@app/core/i18n/pipes/i18n.pipe';
import { JourneyListResponse } from '@shared/models/journey.model';
import { TableHeader } from './models/table-header.model';

type JourneyList = Omit<JourneyListResponse, 'id' | 'statusCode'> & {
  statusCode: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, I18nPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly journeys = input.required<JourneyList[]>();
  readonly tableHeaders = input.required<TableHeader[]>();

  protected readonly columns = computed(() =>
    this.tableHeaders().map((header) => header.columnDef)
  );
}
