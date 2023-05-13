import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})

export class EmpdetailComponent implements OnInit{

  id:any
  employee:any

  constructor(private route:ActivatedRoute,private service:EmployeeService){
    this.id=this.route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.service.getEmployeeDetail(this.id).subscribe(res=>this.employee=res)
  }
}

// step 1: extract query parameter from url
  // for extracting query parameter, import ActivatedRoute from angular/router.
  // add dependency injection with ActivatedRoute inside constructor

// step 2: extract employee data using API call
  // add dependency injection with service class inside constructor

// step 3: display 

