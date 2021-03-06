import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityPipe } from './city.pipe';
import { CityValidatorDirective } from './city-validator.directive';
import { RoundtripValidatorDirective } from './roundtrip-validator.directive';
import { AsyncCityValidatorDirective } from './async-city-validator.directive';
import { ValidationErrorComponent } from './validation/validation-error/validation-error.component';

@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    declarations: [
        CityPipe,
        CityValidatorDirective,
        RoundtripValidatorDirective,
        AsyncCityValidatorDirective,
        ValidationErrorComponent
    ],
    providers: [],
    exports: [
        CityPipe, FormsModule, CityValidatorDirective, RoundtripValidatorDirective, AsyncCityValidatorDirective, ValidationErrorComponent
    ],
})
export class SharedModule { }
