import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Journey, JourneyListResponse } from '../models/journey.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  private readonly http = inject(HttpClient);

  getAllJourneys(): Observable<JourneyListResponse[]> {
    return this.http.get<JourneyListResponse[]>(
      environment.endpoints.journeyList
    );
  }

  getJourneyById(id: number): Observable<Journey> {
    return this.http.get<Journey>(`${environment.endpoints.journey}/${id}`);
  }
}
