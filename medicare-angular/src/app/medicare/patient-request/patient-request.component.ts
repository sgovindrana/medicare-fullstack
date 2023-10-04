import { Component, OnInit } from '@angular/core';
import { MedicareServices } from 'src/app/services/medicare.service';

import { PatientService } from 'src/app/services/patient.service';
import { MedicalTestHistory } from 'src/app/user/medicalTestHistory';
@Component({
  selector: 'app-patient-request',
  templateUrl: './patient-request.component.html',
  styleUrls: ['./patient-request.component.css']
})
export class PatientRequestComponent implements OnInit {

  medicalTestHistory : MedicalTestHistory[];
  

  i = 0;
  empty: boolean = false;
  remove: number = 0;

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

  onValidateRequest(id: number) {
console.log("+++++"+id);

    console.log("Inside validate request")
    this.medicareService.validateRequest(id).subscribe(data => {
      this.remove = 2;
      this.ngOnInit();
    });

}

onDeleteRequest(id: number) {

  console.log("+++++"+id);
  console.log("Inside delete request")
  this.medicareService.deleteRequest(id).subscribe(data => {
    this.remove = 1;
    this.ngOnInit();
  });

}

}
