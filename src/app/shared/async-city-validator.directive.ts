import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { FlightService } from '../flight-booking/flight-search/flight.service';

@Directive({
  selector: '[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidatorDirective,
      multi: true
    }
  ]
})
export class AsyncCityValidatorDirective implements AsyncValidator {

  constructor(private flightService: FlightService) { }

  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {

    const flights$ = this.flightService.find(control.value, '');
    return flights$.pipe(
      delay(7000),
      map(flights => {
        if (flights.length > 0) {
          return {};
        }
        return {
          asyncCity: true
        }
    }));
    
  }

}

