import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function cityValidator(allowed: string[]): ValidatorFn {
    
    return (c: AbstractControl): ValidationErrors => {

        if (allowed.includes(c.value)) {
            return {};
        }

        return {
            city: true
        };

    };

}