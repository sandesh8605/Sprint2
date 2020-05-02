import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updatediagnosticCenter: DiagnosticCenter;
  updateDiagnosticCenter: DiagnosticCenter;
  constructor(private httpService: HttpClient) { }
  public getDiagnosticCenter() {
    console.log("ins service get DiagnosticCenter");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<DiagnosticCenter>("http://localhost:2578/Diagnosticenter/GetAllDiagnosticCenter");
  }

  public addDiagnosticCenter(adddia: DiagnosticCenter) {
    console.log("ins service add");
    console.log(adddia);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:2578/DiagnosticCenter/DiagnosticCenterCreation", adddia,  { headers, responseType: 'text'});
  }
  
  public update(updateDiagnosticCenter: DiagnosticCenter) {
    this.updateDiagnosticCenter = this.updateDiagnosticCenter;
  }
  public updateMethod() {
    return this.updateDiagnosticCenter;
  }
  public onUpdate(updatedia: DiagnosticCenter) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:2578/DiagnosticCenter/updateDiagnosticCenter", updatedia,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:2578/DiagnosticCenter/DeleteDiagnosticCenter/" + id,  { headers, responseType: 'text'});
  }

}
export class DiagnosticCenter {
  id: number;
  centername: string;
  contactnumber: number;
  address: string;
} 