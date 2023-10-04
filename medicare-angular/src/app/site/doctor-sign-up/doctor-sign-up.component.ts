import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Doctor } from 'src/app/user/doctor';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-doctor-sign-up',
  templateUrl: './doctor-sign-up.component.html',
  styleUrls: ['./doctor-sign-up.component.css']
})
export class DoctorSignUpComponent implements OnInit {

  signUpForm: FormGroup;
  doctor: Doctor;
  userCreated: boolean = null;
  error: string;
  constructor(private formBuilder: FormBuilder, private _userService: UserService) { }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      doctorId: ['', [
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
        Validators.required
      ]],
      email: ['', [
        Validators.required
      ]],
      address1: ['', [
        Validators.required
      ]],
      address2: ['', [
        Validators.required
      ]],
      city: ['', [
        Validators.required
      ]],
      zip: ['', [
        Validators.required
      ]],
      degree: ['', [
        Validators.required
      ]],
      speciality: ['', [
        Validators.required
      ]],
      workhours: ['', [
        Validators.required
      ]],
      hospitalName: ['', [
        Validators.required
      ]],
      medicareServiceId: ['', [
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


 get doctorId() {
    return this.signUpForm.get('doctorId');
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
  get zip() {
    return this.signUpForm.get('zip');
  }  
  get degree() {
    return this.signUpForm.get('degree');
  } 
  get speciality() {
    return this.signUpForm.get('speciality');
  } 
  get workhours() {
    return this.signUpForm.get('workhours');
  } 
  get hospitalName() {
    return this.signUpForm.get('hospitalName');
  } 
  get medicareServiceId() {
    return this.signUpForm.get('medicareServiceId');
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

  addDoctor() {
    console.log(this.signUpForm.value['firstName']);
    
    console.log(this.signUpForm.value['password']);
    console.log(this.signUpForm.value['confirmPassword']);
    this.doctor = { doctorId: this.signUpForm.value['doctorId'], age: this.signUpForm.value['age'], altContact: this.signUpForm.value['altContact'], contact: this.signUpForm.value['contact'], dateOfBirth: this.signUpForm.value['dateOfBirth'], email: this.signUpForm.value['email'],  firstName: this.signUpForm.value['firstName'], gender: this.signUpForm.value['gender'],  lastName: this.signUpForm.value['lastName'], password: this.signUpForm.value['password'], address1: this.signUpForm.value['address1'], address2: this.signUpForm.value['address2'], city: this.signUpForm.value['city'], zip: this.signUpForm.value['zip'], degree: this.signUpForm.value['degree'], speciality: this.signUpForm.value['speciality'], workhours: this.signUpForm.value['workhours'], hospitalName: this.signUpForm.value['hospitalName'], medicareServiceId: this.signUpForm.value['medicareServiceId'], medicareService: null, status: false };
    console.log("*************doctor data*************");
    console.log(this.doctor);
    console.log("*************doctor data*************");
    this._userService.addDoctor(this.doctor).subscribe(data => {
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
