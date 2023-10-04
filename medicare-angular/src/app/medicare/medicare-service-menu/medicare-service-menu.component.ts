import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/user/doctor';
import { MedicareServices } from 'src/app/services/medicare.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicare-service-menu',
  templateUrl: './medicare-service-menu.component.html',
  styleUrls: ['./medicare-service-menu.component.css']
})
export class MedicareServiceMenuComponent implements OnInit {

  doctorList: Doctor[];
  isAdmin: boolean;

  constructor(private medicareService: MedicareServices, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.medicareService.getAllDoctorService().subscribe(data => {
      this.doctorList = data;
      this.medicareService.getSubject().subscribe((data) => {
        this.doctorList = data;
       
      });
      console.log(this.doctorList);
    })
  }

  onbookAppointmentClick(id: number) {
    if (this.authenticationService.loggedIn) {
      this.medicareService.addRequest(id).subscribe();
      this.medicareService.bookAppointment = true;
      this.medicareService.appointmentId = id;
    }
    else {
      this.medicareService.clickedOnAdd = true;
      this.router.navigate(['login'])
    }

  }  

}
