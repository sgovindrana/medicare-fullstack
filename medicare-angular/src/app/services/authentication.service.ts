import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient, public router: Router) { }

  loggedInUser = { loggedOut: true };
  validCredentials: boolean = true;
  accessToken: string; // JWT token
  redirectUrl = '/';
  loggedIn: boolean = false;
  private authenticationApiUrl = environment.baseUrl;
  private token: string;
  username: string;
  userId: number = 0;
  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  public setUserId() {
    let sum: number = 0;
    for (let i = 0; i < this.username.length; i++) {
      this.userId = this.username.charCodeAt(i) + this.userId;
    }
  }
  authenticate(user: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(user + ':' + password));
    return this._httpClient.get(this.authenticationApiUrl + "authenticate", { headers })
  }

  logout() {
    this.loggedIn = false;
    this.setToken(null);
    this.userId = null;
  }
}
