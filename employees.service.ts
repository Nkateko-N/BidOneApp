import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  addEmployee<Employee>(addEmployeeRequest: Employee): Observable<Employee>{

  //addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post<Employee>(this.baseApiUrl + '/api/Employee',addEmployeeRequest)
   
  }
}
