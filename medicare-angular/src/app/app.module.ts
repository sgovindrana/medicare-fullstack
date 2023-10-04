import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './site/login/login.component';
import { SearchComponent } from './search/search/search.component';
import { SignUpComponent } from './site/sign-up/sign-up.component';
import { AdminSignUpComponent } from './site/admin-sign-up/admin-sign-up.component';
import { DoctorSignUpComponent } from './site/doctor-sign-up/doctor-sign-up.component';
import { PatientSignUpComponent } from './site/patient-sign-up/patient-sign-up.component';
import { MedicareServiceMenuComponent } from './medicare/medicare-service-menu/medicare-service-menu.component';
import { MedicareServiceInfoComponent } from './medicare/medicare-service-info/medicare-service-info.component';
import { PatientTestResultComponent } from './patient-test-result/patient-test-result.component';
import { EditCheckupRequestComponent } from './medicare/edit-checkup-request/edit-checkup-request.component';
import { ViewReportComponent } from './medicare/view-report/view-report.component';
import { HospitalEditComponent } from './medicare/hospital-edit/hospital-edit.component';
import { PatientListComponent } from './admin/patient-list/patient-list.component';
import { DoctorListComponent } from './admin/doctor-list/doctor-list.component';
import { PatientRequestComponent } from './medicare/patient-request/patient-request.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SignUpComponent,
    AdminSignUpComponent,
    DoctorSignUpComponent,
    PatientSignUpComponent,
    MedicareServiceMenuComponent,
    MedicareServiceInfoComponent,
    PatientTestResultComponent,
    EditCheckupRequestComponent,
    ViewReportComponent,
    HospitalEditComponent,
    PatientListComponent,
    DoctorListComponent,
    PatientRequestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
