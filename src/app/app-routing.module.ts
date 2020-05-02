import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './list-diagnosticCenter/list-diagnosticCenter.component';
import { UpdateEmployeeComponent } from './update-diagnosticCenter/update-diagnosticCenter.component';
import { AddEmployeeComponent } from './add-diagnosticCenter/add-diagnosticCenter.component';


const routes: Routes = [{path:'listemp',component:ListEmployeeComponent},
{path:'addemp',component:AddEmployeeComponent},
{path:'updateemp',component:UpdateEmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
