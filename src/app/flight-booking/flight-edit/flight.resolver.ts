import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Flight } from '../../model/flight';
import { FlightService } from '../flight-search/flight.service';

@Injectable({ providedIn: 'root' })
export class FlightResolver implements Resolve<Flight> {
    
    constructor(private flightService: FlightService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Flight> | Promise<Flight> | Flight {
        const id = route.params.id;
        return this.flightService.findById(id).pipe(
            delay(7000)
        );
    }
}