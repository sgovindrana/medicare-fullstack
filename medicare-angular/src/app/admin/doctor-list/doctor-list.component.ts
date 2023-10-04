import { Component, OnInit } from '@angular/core';

import { MedicareServices } from 'src/app/services/medicare.service';
import { Doctor } from 'src/app/user/doctor';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctortList : Doctor[];
  i = 0;
  empty: boolean = false;
  remove: boolean = false;

  constructor(private medicareService: MedicareServices) { }

  ngOnInit() {

    {
    this.medicareService.getAllDoctorService().subscribe(data => {
      this.doctortList = data;
      if (this.doctortList.length == null) {
        this.empty = true;
        console.log("No appointment request");
      }
      console.log(this.doctortList);

console.log("******************************");      
      this.doctortList.forEach(element => {
        
        console.log(element.firstName);
        console.log(element.doctorId);
        console.log(element.status);
       //  this.doctor[this.i] = element.reqDoctorId;
      //   this.i++; 
      });  
console.log("******************************"+ this.medicareService.isAdmin);
   
    });
 //-----------------------------------------

  }

  }

  onValidateDoctor(id: string) {
    console.log("Inside validate doctor")
    this.medicareService.validateDoctor(id).subscribe(data => {
      this.remove = true;
      this.ngOnInit();
    });

}

}
