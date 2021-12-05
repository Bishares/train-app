import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arrival } from './travel-dashboard/arrival.state';
import { Departure } from './travel-dashboard/departure.state';

@Injectable({
  providedIn: 'root',
})
export class DepartureArrivalService {
  baseUrl: string = 'http://localhost:8080/';
  departureUrl: string = 'departure';
  arrivalUrl: string = 'arrival';

  constructor(private http: HttpClient) {}

  getArrivalsForIdDateAndTime(
    id: string,
    date: string,
    time: string
  ): Observable<Arrival[]> {
    //TODO: put date and time properly into dateTime
    const dateTime = date + time;

    const params = new HttpParams().set('id', id).set('dateTime', dateTime);
    let result = this.http.get<Arrival[]>(this.baseUrl + this.arrivalUrl, {
      params,
    });
    return result;
  }

  getDeparturesForIdDateAndTime(
    id: string,
    date: string,
    time: string
  ): Observable<Departure[]> {
    //TODO: put date and time properly into dateTime
    const dateTime = date + time;

    const params = new HttpParams().set('id', id).set('dateTime', dateTime);
    let result = this.http.get<Departure[]>(this.baseUrl + this.departureUrl, {
      params,
    });
    return result;
  }
}
