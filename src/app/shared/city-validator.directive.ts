import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, NgControlStatus, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { cityValidator } from './city-validator';

@Directive({
  selector: '[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements OnInit, Validator {

  @Input('city') allowed: string[] = [];
  // @Input() strict = false;
  validator: ValidatorFn;
  
  constructor() { }

  ngOnInit(): void {
    this.validator = cityValidator(this.allowed);
  }

  validate(control: AbstractControl): ValidationErrors {
    
    return this.validator(control);
      
  }

}
