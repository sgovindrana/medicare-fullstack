import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search/search.component';
import { AdminSignUpComponent } from './site/admin-sign-up/admin-sign-up.component';
import { DoctorSignUpComponent } from './site/doctor-sign-up/doctor-sign-up.component';
import { PatientSignUpComponent } from './site/patient-sign-up/patient-sign-up.component';
import { PatientTestResultComponent } from './patient-test-result/patient-test-result.component';
import { EditCheckupRequestComponent } from './medicare/edit-checkup-request/edit-checkup-request.component';
import { ViewReportComponent } from './medicare/view-report/view-report.component';
import { HospitalEditComponent } from './medicare/hospital-edit/hospital-edit.component';
import { PatientListComponent } from './admin/patient-list/patient-list.component';
import { DoctorListComponent } from './admin/doctor-list/doctor-list.component';
import { PatientRequestComponent } from './medicare/patient-request/patient-request.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu-home', component: AppComponent },
  { path: 'search', component: SearchComponent },
  { path: 'admin-signup', component: AdminSignUpComponent },
  { path: 'doctor-signup', component: DoctorSignUpComponent },
  { path: 'patient-signup', component: PatientSignUpComponent },
  { path: 'patient-request', component: PatientTestResultComponent },
  { path: 'edit-request/:id', component: EditCheckupRequestComponent },
  { path: 'view-report/:id', component: ViewReportComponent },
  { path: 'edit-hospital/:id', component: HospitalEditComponent },
  { path: 'customer', component: PatientListComponent },
  { path: 'doctor', component: DoctorListComponent },
  { path: 'viewRequest', component: PatientRequestComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
