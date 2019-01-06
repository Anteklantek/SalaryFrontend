import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  constructor(private http: HttpClient) { }

  getSalaryList(dayGrossSalary : string){
    const url = environment.salaryApiUrl;
    const params = new HttpParams().set(environment.salaryApiDayGrossParameter, dayGrossSalary.replace(',','.'));
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
