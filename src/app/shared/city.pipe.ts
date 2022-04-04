import { Pipe, PipeTransform } from '@angular/core';
import { FlightService } from '../flight-search/flight.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  // constructor(flightService: FlightService) {

  // }

  transform(value: string, format: string, lang: string): string {
    let short, long;

    switch(value) {
      case 'Hamburg':
        short = 'HAM';
        long = 'Hamburg Airport Helmut Schmidt';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      default:
        short = long = value;
    }

    if (format === 'long') {
      return long;
    }
    else {
      return short;
    }
  }

}
