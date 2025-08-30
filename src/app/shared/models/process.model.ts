export type Process = {
  id: string;
  typeCode: number;
  keys: ProcessKey[];
  version: string;
};

export type ProcessKey = {
  key: string;
  value: string;
};

export enum ProcessTypeCode {
  CREATION = 0,
  VALIDATION = 1,
  APPROVAL = 2,
  EXECUTION = 3,
  REVIEW = 4,
  ARCHIVE = 5
}
