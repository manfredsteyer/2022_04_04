import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cityValidator } from '../../shared/city-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  meta = [
    { label: 'Id', name: 'id' },
    { label: 'Airport of Depature', name: 'from' },
    { label: 'Airport fo Destination', name: 'to' },
    { label: 'Boarding Date', name: 'date' },
    { label: 'Is Delayed', name: 'delayed', type: 'checkbox' },
  ];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { 

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
  }

}
