import { Process } from './process.model';

export type Journey = {
  id: number;
  description: string;
  statusCode: JourneyStatusCode;
  creationDate: string;
  creationUserEmail: string;
  lastUpdateDate: string;
  lastUpdateUserEmail: string;
  processes: Process[];
};

export enum JourneyStatusCode {
  DRAFT = 0,
  ACTIVE = 1,
  INACTIVE = 2
}

export type JourneyListResponse = Omit<Journey, 'processes'>;

export type CreateJourneyRequest = Pick<
  Journey,
  'creationUserEmail' | 'description' | 'statusCode'
>;

export type UpdateJourneyRequest = Pick<
  Journey,
  'id' | 'lastUpdateUserEmail' | 'description' | 'statusCode'
>;
