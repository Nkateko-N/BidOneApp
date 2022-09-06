
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/Model/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  addEmployeeRequest: Employee = {

    //id:0,
    name:'',
    surname:''

  };


  constructor(private employeeservice:EmployeesService) { }

  ngOnInit(): void {
  }

  addEmployee(){

    this.employeeservice.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(Employee) =>{
        console.log(Employee)
      }
    })
  }

}
