import {FormGroup} from '@angular/forms';

export function MustBePositiveNumberWithMaximumTwoDecimals(numberControlName: string) {
  return (formGroup: FormGroup) => {
    const numberControl = formGroup.controls[numberControlName];

    if (!numberControl) {
      return null;
    }

    const normalizedLocaleValue = numberControl.value.toString().replace(",",".");

    if(!/^[0-9]+(\.[0-9]{1,2})?$/.test(normalizedLocaleValue)){
      numberControl.setErrors({ mustBeNumberWithMaxTwoDigits: true })
    }else{
      numberControl.setErrors(null);
    }
  }
}
