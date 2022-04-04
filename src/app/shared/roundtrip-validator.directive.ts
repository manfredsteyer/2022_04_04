import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[roundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundtripValidatorDirective,
      multi: true
    }
  ]
})
export class RoundtripValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const group = control as FormGroup;
    const from = group.controls.from;
    const to = group.controls.to;

    if (!to?.value || !from?.value) {
      return {};
    }

    if (from.value === to.value) {
      return {
        roundTrip: true
      };
    }

    return {};

  }


}
