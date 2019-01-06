import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  constructor(private http: HttpClient) { }

  getSalaryList(dayGrossSalary : string){
    let url = "http://localhost:8090/salary";
    let params = new HttpParams().set('dayGrossSalary', dayGrossSalary);
    return this.http.get<SalaryList>(url, {params: params})
  }
}

export interface SalaryListItem {
  country: string;
  salary: string;
  rateEffectiveDate: string;
}

export interface SalaryList {
  salaryItemsList: SalaryListItem[];
}
