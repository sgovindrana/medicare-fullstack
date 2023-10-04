import { Injectable, Output, EventEmitter } from '@angular/core';
import { MedicalTestHistory } from '../user/medicalTestHistory';
import { Doctor } from '../user/doctor';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { MedicareServices } from './medicare.service';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  @Output() cartUpdated = new EventEmitter();

  medicalTestHistory : MedicalTestHistory;
  doctor : Doctor;
  url = environment.baseUrl1;

  constructor(private _httpClient: HttpClient, private _authService: AuthenticationService, private medicareService : MedicareServices) { }

  getCart(): MedicalTestHistory {
    return this.medicalTestHistory;
  }

/*  calculateTotal() {
    this.cartItems.total = 0;
    for (let i = 0; i < this.cartItems.foodItemList.length; i++) {
      this.cartItems.total += this.cartItems.foodItemList[i].price;
    }
    this.cartUpdated.emit;
  }  */

  public getMedicalTestHistory(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log(headers);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(this.medicareService.role);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    return this._httpClient.get<MedicalTestHistory>(this.url + "medicare/medicalTestHistory/" + this._authService.username + "/" +this.medicareService.role , { headers })
  }

  

  /*  public deleteCartItem(menuItemId: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.delete(this.url + "menuitem-service/carts/" + this._authService.username + "/" + menuItemId, { headers })
  }  */

}
