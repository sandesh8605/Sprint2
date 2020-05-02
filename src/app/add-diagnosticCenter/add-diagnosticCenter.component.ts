import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, DiagnosticCenter } from '../myservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  message: string;

  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addemp:DiagnosticCenter):any{
    console.log(addemp);
     this.myservice.addDiagnosticCenter(addemp).subscribe(data => {
      this.message=data});
  }

}
