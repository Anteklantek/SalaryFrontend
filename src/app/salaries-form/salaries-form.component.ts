import {Component, OnInit} from '@angular/core';
import {SalaryList, SalaryService} from "./salary.service";

@Component({
  selector: 'app-salaries-form',
  templateUrl: './salaries-form.component.html',
  styleUrls: ['./salaries-form.component.css']
})
export class SalariesFormComponent implements OnInit {
  model: DayGrossSalaryViewModel = {
    dayGrossSalary: '',
    invalid: true
  };
  salaryList: SalaryList;
  currentDate: Date;

  constructor(private salaryService: SalaryService) {

  }

  onSubmit() {
    this.salaryService.getSalaryList(this.model.dayGrossSalary)
      .subscribe((value: SalaryList) => this.salaryList = value);
  }

  ngOnInit(): void {
    this.currentDate = new Date();
  }

  isStringDateToday(stringDate: string): boolean {
    return stringDate == this.currentDate.toISOString().slice(0, 10);
  }


}

export interface DayGrossSalaryViewModel {
  dayGrossSalary: string;
  invalid: boolean;
}
