import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Admin } from 'src/app/user/admin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent implements OnInit {

  signUpForm: FormGroup;
  admin: Admin;
  userCreated: boolean = null;
  error: string;
  constructor(private formBuilder: FormBuilder, private _userService: UserService) { }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      adminId: ['', [
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
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['', [
        Validators.required,
        this.matchConfirmPassword.bind(this)
      ]]
    })


  }
  get adminId() {
    return this.signUpForm.get('adminId');
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
    return this.signUpForm.get('altContact');
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

  addAdmin() {
    console.log(this.signUpForm.value['firstName']);
    console.log(this.signUpForm.value['password']);
    console.log(this.signUpForm.value['confirmPassword']);
    this.admin = { adminId: this.signUpForm.value['adminId'], age: this.signUpForm.value['age'], altContact: this.signUpForm.value['altContact'], contact: this.signUpForm.value['contact'], dateOfBirth: this.signUpForm.value['dateOfBirth'], email: this.signUpForm.value['email'],  firstName: this.signUpForm.value['firstName'], gender: this.signUpForm.value['gender'],  lastName: this.signUpForm.value['lastName'], password: this.signUpForm.value['password'] };
    console.log("*************Admin data*************");
    console.log(this.admin);
    console.log("*************Admin data*************");
    this._userService.addAdmin(this.admin).subscribe(data => {
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
