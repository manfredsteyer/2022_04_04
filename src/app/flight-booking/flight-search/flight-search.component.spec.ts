import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FlightBookingModule } from '../flight-booking.module';

import { FlightSearchComponent } from './flight-search.component';
import { DummyFlightService, FlightService } from './flight.service';

fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  let flightService: FlightService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ FlightBookingModule, HttpClientModule, SharedModule, ReactiveFormsModule],
      providers: [{
        provide: FlightService,
        useClass: DummyFlightService
      }]
      // declarations: [ FlightSearchComponent ]
    })
    .compileComponents();

    // Auf Komponenten-Ebene
    // await TestBed.overrideComponent(FlightSearchComponent, {
    //   set: {
    //     providers: [{
    //       provide: FlightService,
    //       useClass: DummyFlightService
    //     }]
    //   }
    // })
    // .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Auf Komponenten-Ebene
    // flightService = fixture.debugElement.injector.get(FlightService);

    flightService = TestBed.inject(FlightService);
    spyOn(flightService, 'find').and.callThrough();


  });

  it('should not have selected flights initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should not search for flights without from and to', () => {
    component.from = '';
    component.to = '';
    component.search();
    expect(component.flights.length).toBe(0);

    expect(flightService.find).not.toHaveBeenCalled();

  });

  it('should search for flights if from and to given', () => {
    
    component.from = 'Graz';
    component.to = 'Hamburg';
    component.search();

    expect(component.flights.length).toBe(3); 

    expect(flightService.find).toHaveBeenCalled();
    expect(flightService.find).toHaveBeenCalledWith('Graz', 'Hamburg');
    expect(flightService.find).toHaveBeenCalledTimes(1);


    // intern: flightService.find('Graz', 'Hamburg')
  });


});
