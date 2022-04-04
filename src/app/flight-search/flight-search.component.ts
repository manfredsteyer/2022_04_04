import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { DummyFlightService, FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  // providers: [ {provide: FlightService, useClass:DummyFlightService}]
})
export class FlightSearchComponent implements OnInit {

  flights: Array<Flight> = [];
  selectedFlight: Flight;

  from: string;
  to: string;

  // private http: HttpClient

  constructor(private flightService: FlightService) { 
    // this.http = http;
  }

  ngOnInit(): void {
  }

  search(): void {

    // throw new Error('Manfred hat hunger!!');

    // this.flights = [
    //   { id: 1, from: 'Nürnberg', to: 'Flagranti', date: '2022-02-22T13:00+01:00', delayed: false },
    //   { id: 2, from: 'Nürnberg', to: 'Kognito', date: '2022-02-22T13:20+01:00', delayed: false },
    //   { id: 3, from: 'Nürnberg', to: 'Mallorca', date: '2022-02-22T13:40+01:00', delayed: false },
    // ];

    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('err', err);
      }
    });

  
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
