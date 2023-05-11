import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  baseUrl='http://127.0.0.1:8000/api/employees/'

  // httpclient
  // /name,course,rollno

  getAllEmployees(){
    return fetch(this.baseUrl)
  }

  getEmployeeDetail(id:any){
    return fetch(`${this.baseUrl}/${id}`)
  }

  employeeDelete(id:any){
    return fetch(`${this.baseUrl}/${id}`)
  }

  employeeUpdate(id:any,data:any){
    return fetch(`${this.baseUrl}/${id}`)
  }

  employeeCreate(data:any){
    return fetch(this.baseUrl)
  } 

}
