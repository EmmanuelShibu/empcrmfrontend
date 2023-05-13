import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { EmployeeService } from '../service/employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent {

  empForm=new FormGroup(
    {
      name:new FormControl(),
      department:new FormControl(),
      salary:new FormControl(),
      phone:new FormControl(),
      address:new FormControl(),
      email:new FormControl(),
    }
  )

    addEmployee(){
      let formData=this.empForm.value
      this.service.employeeCreate(formData).subscribe(res=>this.router.navigateByUrl(''))
    }

    constructor(private service:EmployeeService,private router:Router){

    }

}

// class Employee(models.Model):
//     name=models.CharField(max_length=200)
//     department=models.CharField(max_length=200)
//     salary=models.CharField(max_length=200)
//     address=models.CharField(max_length=200)
//     phone=models.CharField(max_length=200)
//     email=models.CharField(max_length=200)