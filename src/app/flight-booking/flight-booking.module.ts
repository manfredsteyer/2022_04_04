import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';

@NgModule({
  imports: [
    CommonModule,   // ngClass, ngStyle
    // FormsModule,    // ngModel
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    PassengerSearchComponent,
    FlightBookingComponent,
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
