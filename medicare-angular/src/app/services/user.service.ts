import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../user/admin';
import { Doctor } from '../user/doctor';
import { Patient } from '../user/patient';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = environment.baseUrl1;
  
  constructor(private _httpClient: HttpClient) { }

  addAdmin(admin: Admin): Observable<any> {
    //this.userList.push(admin);
    console.log("Inside add Admin of service ")
    console.log(admin)
    return this._httpClient.post<any>(this.url + "users/admin", admin)
 //   this.router.navigate(['login']);
  }

  addDoctor(doctor: Doctor): Observable<any> {

    console.log("Inside add Doctor of service ");
    console.log(doctor);
    return this._httpClient.post<any>(this.url + "users/doctor", doctor);

  }

  addPatient(patient: Patient): Observable<any> {

    console.log("Inside add Patient of service ");
    console.log(patient);
    return this._httpClient.post<any>(this.url + "users/patient", patient);

  }

}
