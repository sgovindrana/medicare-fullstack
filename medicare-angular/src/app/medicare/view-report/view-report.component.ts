import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { MedicalTestHistory } from 'src/app/user/medicalTestHistory';
import { MedicareServices } from 'src/app/services/medicare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  itemForm: FormGroup;
  medicalTestHistory : MedicalTestHistory;
  isChecked : boolean = false;
 

  constructor(private route: ActivatedRoute, private formBuild: FormBuilder, private medicareService: MedicareServices,  private router: Router) { }

  ngOnInit() {
    const requestId = this.route.snapshot.paramMap.get('id');
    console.log("^^^^^^^^^^^^^^^^^^^^^^^"+requestId);

    this.medicareService.getMedicalTestHistoryById(+requestId).subscribe(data => {
     
      this.medicalTestHistory = data;
      
      this.itemForm = this.formBuild.group({

        hospitalName: [this.medicalTestHistory.reqDoctorId.hospitalName, [
        
        ]],    
        docfirstName: [this.medicalTestHistory.reqDoctorId.firstName, [
          
        ]], 
        doclastName: [this.medicalTestHistory.reqDoctorId.lastName, [
          
        ]], 

        mymedicareService: [this.medicalTestHistory.reqDoctorId.medicareService.medicareService, [
          
        ]],   
        serviceDescription: [this.medicalTestHistory.reqDoctorId.medicareService.serviceDescription, [
          
        ]],  
        amount: [this.medicalTestHistory.reqDoctorId.medicareService.amount, [
         
        ]], 

        patfirstName: [this.medicalTestHistory.reqPatientId.firstName, [
          
        ]], 
        patlastName: [this.medicalTestHistory.reqPatientId.lastName, [
          
        ]],
        age: [this.medicalTestHistory.reqPatientId.age, [
          
        ]],
        dateOfBirth: [this.medicalTestHistory.reqPatientId.dateOfBirth, [
         
        ]],
        contact: [this.medicalTestHistory.reqPatientId.contact, [
          
        ]],
        pataddress1: [this.medicalTestHistory.reqPatientId.address1, [
          
        ]],
        pataddress2: [this.medicalTestHistory.reqPatientId.address2, [
          
        ]],
        city: [this.medicalTestHistory.reqPatientId.city, [
          
        ]],


        testResultDate: [this.medicalTestHistory.testResultDate, [
          
        ]],
        serviceDate: [this.medicalTestHistory.serviceDate, [
          
        ]],
        Diag1Av: [this.medicalTestHistory.diag1Av, [
          
        ]],
        diag1Nr: [this.medicalTestHistory.diag1Nr, [
          
        ]],
        diag2Av: [this.medicalTestHistory.diag2Av, [
         
        ]],
        diag2Nr: [this.medicalTestHistory.diag2Nr, [
          
        ]],
        diag3Av: [this.medicalTestHistory.diag3Av, [
          
        ]],
        diag3Nr: [this.medicalTestHistory.diag3Nr, [
          
        ]],
        doctorComments: [this.medicalTestHistory.doctorComments, [
          
        ]],
        otherInfo: [this.medicalTestHistory.otherInfo, [
          
        ]]
      })
    });

  }

  get hospitalName() {
    return this.itemForm.get('hospitalName');
  }  

  get docfirstName() {
    return this.itemForm.get('docfirstName');
  } 

  get doclastName() {
    return this.itemForm.get('doclastName');
  } 

  get mymedicareService() {
    return this.itemForm.get('mymedicareService');
  } 

  get serviceDescription() {
    return this.itemForm.get('serviceDescription');
  } 

  get amount() {
    return this.itemForm.get('amount');
  } 

  get patfirstName() {
    return this.itemForm.get('patfirstName');
  } 

  get patlastName() {
    return this.itemForm.get('patlastName');
  }

  get age() {
    return this.itemForm.get('age');
  }

  get dateOfBirth() {
    return this.itemForm.get('dateOfBirth');
  }

  get contact() {
    return this.itemForm.get('contact');
  }

  get pataddress1() {
    return this.itemForm.get('pataddress1');
  }

  get pataddress2() {
    return this.itemForm.get('pataddress2');
  }

  get city() {
    return this.itemForm.get('city');
  }


  get testResultDate() {
    return this.itemForm.get('testResultDate');
  }
  get serviceDate() {
    return this.itemForm.get('serviceDate');
  }
  get Diag1Av() {
    return this.itemForm.get('diag1Av');
  }
  get diag1Nr() {
    return this.itemForm.get('diag1Nr');
  }
  get diag2Av() {
    return this.itemForm.get('diag2Av');
  }
  get diag2Nr() {
    return this.itemForm.get('diag2Nr');
  }
  get diag3Av() {
    return this.itemForm.get('diag3Av');
  }
  get diag3Nr() {
    return this.itemForm.get('diag3Nr');
  }

  get doctorComments() {
    return this.itemForm.get('doctorComments');
  }

  get otherInfo() {
    return this.itemForm.get('otherInfo');
  }

  onSubmit() {

    this.router.navigate(['/search'])

    }


}
