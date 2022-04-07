import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../model/flight';

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }
  
  findById(id: string): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('id', id);
    const headers = new HttpHeaders().set('Accept', 'application/json'); //.set('Authorization', 'Bearer adflsdflkjsddfasdk==')
    
    return this.http.get<Flight>(url, { params, headers});
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json'); //.set('Authorization', 'Bearer adflsdflkjsddfasdk==')
    
    return this.http.get<Flight[]>(url, { params, headers});
  }

}


@Injectable()
export class DummyFlightService implements FlightService {

  constructor() {
  }
 
  findById(id: string): Observable<Flight> {
    throw new Error('Method not implemented.');
  }

  find(from: string, to: string): Observable<Flight[]> {
      return of([
      { id: 1, from: 'Nürnberg', to: 'Flagranti', date: '2022-02-22T13:00+01:00', delayed: false },
      { id: 2, from: 'Nürnberg', to: 'Kognito', date: '2022-02-22T13:20+01:00', delayed: false },
      { id: 3, from: 'Nürnberg', to: 'Mallorca', date: '2022-02-22T13:40+01:00', delayed: false },
    ]);
  }

}



const DEBUG = false;

@Injectable({
  providedIn: 'root',
  //useClass: DummyFlightService
  useFactory: (http: HttpClient) => {
    if (DEBUG) {
      return new DummyFlightService();
    }
    else {
      return new DefaultFlightService(http);
    }
  },
  deps: [HttpClient]
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;
  abstract findById(id: string): Observable<Flight>;
}
