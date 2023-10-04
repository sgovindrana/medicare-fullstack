import { Component, OnInit } from '@angular/core';

import { Patient } from 'src/app/user/patient';

import { MedicareServices } from 'src/app/services/medicare.service';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  
  patientList : Patient[];
  i = 0;
  empty: boolean = false;
  remove: boolean = false;

  constructor(private medicareService: MedicareServices) { }

  ngOnInit() {

    {
    this.medicareService.getAllPatient().subscribe(data => {
      this.patientList = data;
      if (this.patientList.length == null) {
        this.empty = true;
        console.log("No appointment request");
      }
      console.log(this.patientList);

console.log("******************************");      
      this.patientList.forEach(element => {
        
        console.log(element.firstName);
        console.log(element.patientId);
        console.log(element.valid);
       //  this.doctor[this.i] = element.reqDoctorId;
      //   this.i++; 
      });  
console.log("******************************"+ this.medicareService.isAdmin);
   
    });
 //-----------------------------------------

  }

  }

  onValidatePatient(id: string) {
    console.log("Inside validate patient")
    this.medicareService.validatePatient(id).subscribe(data => {
      this.remove = true;
      this.ngOnInit();
    });

}
}
