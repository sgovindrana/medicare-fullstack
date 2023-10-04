import { Component, OnInit } from '@angular/core';
import { MedicalTestHistory } from '../user/medicalTestHistory';
import { PatientService } from '../services/patient.service';
import { Doctor } from '../user/doctor';
import { Patient } from '../user/patient';
import { MedicareServices } from '../services/medicare.service';


@Component({
  selector: 'app-patient-test-result',
  templateUrl: './patient-test-result.component.html',
  styleUrls: ['./patient-test-result.component.css']
})
export class PatientTestResultComponent implements OnInit {

  medicalTestHistory : MedicalTestHistory[];
  
  doctor: Doctor[];
  patient : Patient;
  i = 0;
  empty: boolean = false;
  remove: boolean = false;

  constructor(private patientService: PatientService, private medicareService: MedicareServices) { }

  ngOnInit() {

   
    {
    this.patientService.getMedicalTestHistory().subscribe(data => {
      this.medicalTestHistory = data;
      if (this.medicalTestHistory == null) {
        this.empty = true;
        console.log("No appointment request");
      }
      console.log(this.medicalTestHistory);

console.log("******************************");      
      this.medicalTestHistory.forEach(element => {
        
        console.log(element.reqDoctorId.hospitalName);
        console.log(element.reqPatientId.firstName);
       //  this.doctor[this.i] = element.reqDoctorId;
      //   this.i++; 
      });  
console.log("******************************"+ this.medicareService.isDoctor);
   
    });
 //-----------------------------------------

  }

  }

/*  onDeleteCart(id: number) {
    console.log("Inside delete Cart item")
    this.cartService.deleteCartItem(id).subscribe(data => {
      this.remove = true;
      this.ngOnInit();
    });
 //   this.remove = true;
  /*  this.cartService.getAllCartItems().subscribe(data => {
      this.cart = data;
      if (this.cart.total == 0)
        this.empty = true;
      console.log(this.cart)
    }); 
  }  */


}
