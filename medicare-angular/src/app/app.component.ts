import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { MedicareServices } from './services/medicare.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'medicare-angular';

  
  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['search']);
  }
  constructor(private authService: AuthenticationService, public router: Router, private medicareService: MedicareServices) {
  }
 
  isLoggedIn: boolean = false;


  loggedIn(): boolean {
    if (this.authService.loggedIn) {
      this.isLoggedIn = true;
      return true
    }
    else {
      this.isLoggedIn = false;
      return false;
    }
  }
  clickOnAddCart() {
    this.medicareService.clickedOnAdd = false;
    this.medicareService.bookAppointment = false;
  }
  exit() {
    window.location.reload();
  }

}
