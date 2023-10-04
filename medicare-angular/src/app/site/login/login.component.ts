import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MedicareServices } from 'src/app/services/medicare.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuild: FormBuilder, private authService: AuthenticationService, private router: Router, private medicareService: MedicareServices) { }
  ngOnInit() {
    this.loginForm = this.formBuild.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  getUsername() {
    return this.loginForm.value['username'];
  }

  getPassword() {
    return this.loginForm.value['password'];
  }


  toSignup() {
    this.router.navigate(['signup'])
  }

  invalidLogin: boolean;
  error: string = "Login Failed"


  onSubmit() {
    this.authService.authenticate(this.getUsername(), this.getPassword()).subscribe(
      data => {
        console.log(data);
        this.authService.setToken(data.token);
        console.log(data.token);
        this.error = "Logged In successfully";
        this.authService.username = this.getUsername();

        console.log(this.authService.username);

        this.authService.loggedIn = true;
        this.authService.validCredentials = true;
        
        this.authService.setUserId();

        console.log("userid" + this.authService.userId)
        if (data.role == "admin")
          this.medicareService.isAdmin = true;
        else if (data.role =="doctor") 
          this.medicareService.isDoctor = true;
        else if (data.role =="patient") 
          this.medicareService.isPatient = true;
        else {
          this.medicareService.isAdmin = false;
          this.medicareService.isDoctor = false;
          this.medicareService.isPatient = false;
        } 
        this.medicareService.role = data.role;  
        console.log(data.role);
        this.router.navigate(['/search'])
        console.log(data.token);
        console.log(data.role);
      },
      error => {
        this.authService.validCredentials = false;
        this.invalidLogin = true
        if (error.status == 401)
          this.error = "Invalid Username or Password";
        console.log(error);
      }
    );
  }

}
