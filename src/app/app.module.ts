import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { CityPipe } from './shared/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      FlightBookingModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent 
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
