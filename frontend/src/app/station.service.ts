import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TrainStation } from './travel-dashboard/train-station.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  baseUrl: string = 'http://localhost:8080/';
  locationUrl: string = 'location';

  constructor(private http: HttpClient) {}

  getLocationsForName(name: string): Observable<TrainStation[]> {
    const params = new HttpParams().set('name', name);
    let result = this.http.get<TrainStation[]>(
      this.baseUrl + this.locationUrl,
      { params }
    );
    return result;
  }
}
