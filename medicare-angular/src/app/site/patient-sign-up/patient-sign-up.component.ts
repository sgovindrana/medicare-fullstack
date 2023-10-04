import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Patient } from 'src/app/user/patient';

@Component({
  selector: 'app-patient-sign-up',
  templateUrl: './patient-sign-up.component.html',
  styleUrls: ['./patient-sign-up.component.css']
})
export class PatientSignUpComponent implements OnInit {

  signUpForm: FormGroup;
  patient: Patient;
  userCreated: boolean = null;
  error: string;
  constructor(private formBuilder: FormBuilder, private _userService: UserService) { }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      patientId: ['', [
        Validators.required,
        this.isUsernameTaken
      ]],
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [  
        Validators.required
      ]],
      age: ['', [
        Validators.required
      ]],
      gender: ['', [
        Validators.required
      ]],
      dateOfBirth: ['', [
        Validators.required
      ]],
      contact: ['', [
        Validators.required
      ]],
      altContact: ['', [
       
      ]],
      email: ['', [
        Validators.required
      ]],
      address1: ['', [
        Validators.required
      ]],
      address2: ['', [
        
      ]],
      city: ['', [
        Validators.required
      ]],
      state: ['', [
        Validators.required
      ]],
      zip: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['', [
        Validators.required,
        this.matchConfirmPassword.bind(this)
      ]]
    })


  }


 get patientId() {
    return this.signUpForm.get('patientId');
  }
  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get age() {
    return this.signUpForm.get('age');
  }
  get gender() {
    return this.signUpForm.get('gender');
  }

  get dateOfBirth() {
    return this.signUpForm.get('dateOfBirth');
  }
  get contact() {
    return this.signUpForm.get('contact');
  }
  get altContact() {
    return this.signUpForm.get('altContact');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get address1() {
    return this.signUpForm.get('address1');
  }
  get address2() {
    return this.signUpForm.get('address2');
  }  
  get city() {
    return this.signUpForm.get('city');
  }
  get state() {
    return this.signUpForm.get('state');
  } 
  get zip() {
    return this.signUpForm.get('zip');
  }  
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }  


  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }
  isUsernameTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
      return { 'userNameTaken': true };
    } else {
      return null;
    }
  }

  addPatient() {
    console.log(this.signUpForm.value['firstName']);
    
    console.log(this.signUpForm.value['password']);
    console.log(this.signUpForm.value['confirmPassword']);
    this.patient = { patientId: this.signUpForm.value['patientId'], age: this.signUpForm.value['age'], altContact: this.signUpForm.value['altContact'], contact: this.signUpForm.value['contact'], dateOfBirth: this.signUpForm.value['dateOfBirth'], email: this.signUpForm.value['email'],  firstName: this.signUpForm.value['firstName'], gender: this.signUpForm.value['gender'],  lastName: this.signUpForm.value['lastName'], password: this.signUpForm.value['password'], address1: this.signUpForm.value['address1'], address2: this.signUpForm.value['address2'], city: this.signUpForm.value['city'], state:this.signUpForm.value['state'], zip: this.signUpForm.value['zip'], valid : false, doctorList: null};
    console.log("*************doctor data*************");
    console.log(this.patient);
    console.log("*************doctor data*************");
    this._userService.addPatient(this.patient).subscribe(data => {
      this.userCreated = true;
      this.error = "Signed Up Successfull.Go to Login Page"
      console.log(this.userCreated)
    },
      error => {
        console.log("error")
        if (error.status == 400) {
          this.error = "User Already Exists";
          this.userCreated = false;
        }
        console.log(this.error);
      }
    );
  }  



}
