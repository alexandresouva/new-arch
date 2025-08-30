import { JourneyListResponse } from '@app/shared/models/journey.model';

type ColumnDef = keyof JourneyListResponse;

export type TableHeader = {
  label: string;
  columnDef: ColumnDef;
};
