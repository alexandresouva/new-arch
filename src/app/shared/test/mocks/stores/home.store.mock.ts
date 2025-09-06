import { signal, WritableSignal } from '@angular/core';
import { JourneyListResponse } from '@shared/models/journey.model';

type HomeStoreMock = {
  loading: WritableSignal<boolean>;
  journeys: WritableSignal<JourneyListResponse[]>;
  meta: WritableSignal<{
    pagination: { pageNumber: number; pageSize: number; totalPages: number };
  }>;
};

export function setupHomeStoreMock(): {
  homeStoreMock: HomeStoreMock;
} {
  const homeStoreMock = {
    loading: signal<boolean>(false),
    journeys: signal<JourneyListResponse[]>([]),
    meta: signal({
      pagination: {
        pageNumber: 1,
        pageSize: 10,
        totalPages: 1
      }
    })
  };

  return { homeStoreMock };
}
