import {Directive, Input} from '@angular/core';
import {FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

import {MustBePositiveNumberWithMaximumTwoDecimals} from './number.validator';

@Directive({
  selector: '[numberMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustBePositiveNumberWithMaximumTwoDecimalsDirective, multi: true }]
})
export class MustBePositiveNumberWithMaximumTwoDecimalsDirective implements Validator {
  @Input('numberMatch') numberMatch: string;

  validate(formGroup: FormGroup): ValidationErrors {
    return MustBePositiveNumberWithMaximumTwoDecimals(this.numberMatch)(formGroup);
  }
}
