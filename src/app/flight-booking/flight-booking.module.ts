import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  imports: [
    CommonModule,   // ngClass, ngStyle
    // FormsModule,    // ngModel
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
