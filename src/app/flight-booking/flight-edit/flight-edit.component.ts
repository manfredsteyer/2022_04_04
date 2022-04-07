import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { Flight } from '../../model/flight';
import { cityValidator } from '../../shared/city-validator';
import { ComponentWithExitWarning } from '../../shared/exit/exit.guard';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit, ComponentWithExitWarning {

  id: string;
  showDetails: string;
  flight: Flight;

  meta = [
    { label: 'Id', name: 'id' },
    { label: 'Airport of Depature', name: 'from' },
    { label: 'Airport fo Destination', name: 'to' },
    { label: 'Boarding Date', name: 'date' },
    { label: 'Is Delayed', name: 'delayed', type: 'checkbox' },
  ];

  formGroup: FormGroup;
  router: Observer<boolean>;
  showWarning = false;
  
  decide(decision: boolean): void {
    this.showWarning = false;
    this.router.next(decision);
    this.router.complete();
  }

  canExit(): Observable<boolean> {
    this.showWarning = true;
    return new Observable<boolean>(observer => {
      this.router = observer;
    });
  }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) { 

    this.formGroup = fb.group({
      id: [],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          cityValidator(['Graz', 'Frankfurt', 'Hamburg', 'Berlin', 'Hof', 'Marktredwitz'])
        ]
      ],
      to: ['Hamburg'],
      date: [],
      delayed: []
    });

    this.formGroup.patchValue({
      id: 1,
      from: 'Graz',
      to: 'Hamburg',
      date: 'jetzt'
    });

    this.formGroup.valueChanges.subscribe(data => {
      console.debug('new data', data);
    });

    this.formGroup.controls.from.valueChanges.subscribe(data => {
      console.debug('new from', data);
    });


  }



  save(): void {
    console.debug(
      'Would save, if this was not a shareware version', 
      this.formGroup.value
    );
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      // this.id = params.id;
      this.showDetails = params['showDetails'];
    });
  
    this.route.data.subscribe(data => {
      this.flight = data['flight'];
    });

    this.formGroup.patchValue(this.flight);
  
  }

}
