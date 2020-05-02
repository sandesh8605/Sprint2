import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, DiagnosticCenter } from '../myservice.service';

@Component({
  selector: 'app-update-diagnosticCenter',
  templateUrl: './update-diagnosticCenter.component.html',
  styleUrls: ['./update-diagnosticCenter.component.css']
})
export class UpdatediagnosticCenter00C8omponent implements OnInit {
  obj1: any;
  employees: DiagnosticCenter[];
  message: string;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(uemployee: DiagnosticCenter): any {
    return this.myservice.onUpdate(uemployee).subscribe(data => {
      this.message = data
    });
  }
  ngOnInit(): void {
  }

}
