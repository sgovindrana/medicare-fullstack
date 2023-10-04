import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { MedicareService } from '../medicare/medicareItem';
import { Doctor } from '../user/doctor';
import { Patient } from '../user/patient';
import { MedicalTestHistory } from '../user/medicalTestHistory';


@Injectable({
  providedIn: 'root'
})
export class MedicareServices {

  isAdmin: boolean = false;
  isDoctor:boolean = false;
  isPatient:boolean = false;
  role : string;
  
  bookAppointment: boolean = false;
  appointmentId: number;
  isLoggedIn: boolean = false;
  clickedOnAdd: boolean = false;
  private subject = new Subject<Doctor[]>();
  url = environment.baseUrl1;
  constructor(private _httpClient: HttpClient, private _authService: AuthenticationService) { }

 /* public getAllMedicareItems(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.get<MedicareService[]>(this.url + "medicare", { headers });
  }

  getSubject(): Subject<MedicareService[]> {
    return this.subject;
  }
 */

public getAllDoctorService(): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  return this._httpClient.get<Doctor[]>(this.url + "medicare/doctor", { headers });
}

public getSubject(): Subject<Doctor[]> {
  return this.subject;
}

public addRequest(doctorId: number): Observable<any> {
  let headers = new HttpHeaders();
  console.log("inside add request"+ this._authService.username);
  console.log(doctorId);
  
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  return this._httpClient.put(this.url + "medicare/patient/" + this._authService.username + "/" + doctorId, { headers })
}

public getPatient(username : string): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  console.log(headers);
  return this._httpClient.get<Patient>(this.url + "medicare/patient/" + username, { headers })
}


public getMedicalTestHistoryById(id: number): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  console.log(headers);
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  
  return this._httpClient.get<MedicalTestHistory>(this.url + "medicare/medicalTestHistory/" + id , { headers })
}

public saveTestReport(medicalTestHistory: MedicalTestHistory): Observable<any> {
  let headers = new HttpHeaders();

  console.log("^^^^^^^^^^^^^^^^^^" + medicalTestHistory);

  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  return this._httpClient.put<MedicalTestHistory>(this.url + "medicare/saveReport", medicalTestHistory, { headers });
}

public getDoctorById(id: string): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  console.log(headers);
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  
  return this._httpClient.get<Doctor>(this.url + "medicare/doctor/" + id , { headers })
}

public saveDoctor(doctor: Doctor): Observable<any> {
  let headers = new HttpHeaders();

  console.log("^^^^^^^^^^^^^^^^^^" + doctor);

  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  return this._httpClient.put<Doctor>(this.url + "medicare/saveDoctor", doctor, { headers });
}

public getAllPatient(): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  return this._httpClient.get<Patient[]>(this.url + "admin/patient", { headers });
}

public validatePatient(patientId: string): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  return this._httpClient.put(this.url + "admin/patient/" + this.role + "/" + patientId, { headers })
}

public validateDoctor(doctorId: string): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  return this._httpClient.put(this.url + "admin/doctor/" + this.role + "/" + doctorId, { headers })
}

public validateRequest(id: number): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  return this._httpClient.put(this.url + "admin/report/" + this.role + "/" + id, { headers })
}

public deleteRequest(id: number): Observable<any> {
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
  return this._httpClient.delete(this.url + "admin/removeRequest/" + this.role + "/" + id, { headers })
}

}
