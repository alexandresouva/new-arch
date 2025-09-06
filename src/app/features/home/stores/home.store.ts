import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap, tap } from 'rxjs';

import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals';
import { JourneyListResponse } from '@shared/models/journey.model';
import { Pagination } from '@shared/models/pagination.model';
import { JourneyService } from '@shared/services/journey.service';

export type HomeStore = {
  loading: boolean;
  journeys: JourneyListResponse[];
  meta: {
    pagination: Pagination;
  };
};

const initialState: HomeStore = {
  loading: false,
  journeys: [],
  meta: {
    pagination: {
      pageNumber: 1,
      pageSize: 10,
      totalPages: 1
    }
  }
};

export const HomeStore = signalStore(
  withState<HomeStore>(initialState),
  withMethods((store, journeyService = inject(JourneyService)) => ({
    fetchAllJourneys: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() =>
          journeyService.getAllJourneys().pipe(
            tapResponse({
              next: (journeys) => patchState(store, { journeys }),
              error: () => {},
              finalize: () => patchState(store, { loading: false })
            })
          )
        )
      )
    )
  })),
  withHooks({
    onInit: (store) => {
      store.fetchAllJourneys();
    }
  })
);
