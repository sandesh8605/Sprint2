import { Component, OnInit } from '@angular/core';
import { MyserviceService, DiagnosticCenter } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  message: string;
  employees: DiagnosticCenter[];
  constructor(private myservice: MyserviceService, private router: Router) {
  }

  ngOnInit(): any {
    this.myservice.getDiagnosticCenter().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.employees = response;
  }
  update(updateemployee: DiagnosticCenter) {
    this.myservice.update(updateemployee);
    this.router.navigate(['/updateemp']); //updating the employee
  }
  delete(deleteemployee: DiagnosticCenter): any {
    this.myservice.delete(deleteemployee.id).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/listemp']);
  }
}
