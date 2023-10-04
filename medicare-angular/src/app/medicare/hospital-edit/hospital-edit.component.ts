import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { MedicareServices } from 'src/app/services/medicare.service';
import { MedicalTestHistory } from 'src/app/user/medicalTestHistory';
import { Doctor } from 'src/app/user/doctor';

@Component({
  selector: 'app-hospital-edit',
  templateUrl: './hospital-edit.component.html',
  styleUrls: ['./hospital-edit.component.css']
})
export class HospitalEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuild: FormBuilder, private medicareService: MedicareServices) { }

  itemForm: FormGroup;
  doctor : Doctor;
saveDone : boolean;

  ngOnInit() {

    const requestId = this.route.snapshot.paramMap.get('id');
    console.log("^^^^^^^^^^^^^^^^^^^^^^^"+requestId);

    this.medicareService.getDoctorById(requestId).subscribe(data => {
     
      this.doctor = data;

      console.log("^^^^^^^^^^^^^^^" );
      console.log(this.doctor);
      
      this.itemForm = this.formBuild.group({
        firstName: [this.doctor.firstName, [
          Validators.required
        ]],
        lastName: [this.doctor.lastName, [
          Validators.required
        ]],
        contact: [this.doctor.contact, [
          Validators.required
        ]],
        email: [this.doctor.email, [
          Validators.required
        ]],
        degree: [this.doctor.degree, [
          Validators.required
        ]],
        mymedicareService: [this.doctor.medicareService.medicareService, [
          Validators.required
        ]],
        serviceDescription: [this.doctor.medicareService.serviceDescription, [
          Validators.required
        ]],
        amount: [this.doctor.medicareService.amount, [
          Validators.required
        ]]

      })
    });

  }

  get firstName() {
    return this.itemForm.get('firstName');
  }
  get lastName() {
    return this.itemForm.get('lastName');
  }
  get contact() {
    return this.itemForm.get('contact');
  }
  get email() {
    return this.itemForm.get('email');
  }
  get degree() {
    return this.itemForm.get('degree');
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



  onSubmit() {
    this.doctor.firstName = this.itemForm.value["firstName"];
    this.doctor.lastName = this.itemForm.value["lastName"];
    this.doctor.contact = this.itemForm.value["contact"];
    this.doctor.email = this.itemForm.value["email"];
    this.doctor.degree = this.itemForm.value["degree"];
    this.doctor.medicareService.medicareService = this.itemForm.value["mymedicareService"];
    this.doctor.medicareService.serviceDescription = this.itemForm.value["serviceDescription"];
    this.doctor.medicareService.amount = this.itemForm.value["amount"];


    console.log("::::::::::::::::::::::::::");
    console.log(this.doctor);

    this.medicareService.saveDoctor(this.doctor).subscribe();
  
this.saveDone = true;

    }

  

} 
