import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { MedicalTestHistory } from 'src/app/user/medicalTestHistory';
import { MedicareServices } from 'src/app/services/medicare.service';

@Component({
  selector: 'app-edit-checkup-request',
  templateUrl: './edit-checkup-request.component.html',
  styleUrls: ['./edit-checkup-request.component.css']
})
export class EditCheckupRequestComponent implements OnInit {

  itemForm: FormGroup;
  medicalTestHistory : MedicalTestHistory;
  saveDone : boolean;

  constructor(private route: ActivatedRoute, private formBuild: FormBuilder, private medicareService: MedicareServices) { }

  ngOnInit() {
    const requestId = this.route.snapshot.paramMap.get('id');
    console.log("^^^^^^^^^^^^^^^^^^^^^^^"+requestId);

    this.medicareService.getMedicalTestHistoryById(+requestId).subscribe(data => {
     
      this.medicalTestHistory = data;
      
      this.itemForm = this.formBuild.group({
        testResultDate: [this.medicalTestHistory.testResultDate, [
          Validators.required
        ]],
        serviceDate: [this.medicalTestHistory.serviceDate, [
          Validators.required
        ]],
        diag1Av: [this.medicalTestHistory.diag1Av, [
          Validators.required
        ]],
        diag1Nr: [this.medicalTestHistory.diag1Nr, [
          Validators.required
        ]],
        diag2Av: [this.medicalTestHistory.diag2Av, [
          Validators.required
        ]],
        diag2Nr: [this.medicalTestHistory.diag2Nr, [
          Validators.required
        ]],
        diag3Av: [this.medicalTestHistory.diag3Av, [
          Validators.required
        ]],
        diag3Nr: [this.medicalTestHistory.diag3Nr, [
          Validators.required
        ]],
        doctorComments: [this.medicalTestHistory.doctorComments, [
          Validators.required
        ]],
        otherInfo: [this.medicalTestHistory.otherInfo, [
          Validators.required
        ]]
      })
    });

    // this.itemForm = this.formBuild.group({
    //   itemName: [null, [
    //     Validators.required,
    //     Validators.minLength(2),
    //     Validators.maxLength(20)
    //   ]],
    //   itemURL: [null, [
    //     Validators.required
    //   ]],
    //   price: [null, [
    //     Validators.required
    //   ]],
    //   dateOfLaunch: [null, [
    //     Validators.required
    //   ]],
    //   category: [null, [
    //     Validators.required
    //   ]],
    //   active: [null, [
    //     Validators.required
    //   ]],
    //   freeDelivery: [null]
    // })
  }

  get testResultDate() {
    return this.itemForm.get('testResultDate');
  }
  get serviceDate() {
    return this.itemForm.get('serviceDate');
  }
  get diag1Av() {
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
    this.medicalTestHistory.serviceDate = this.itemForm.value["serviceDate"];
    this.medicalTestHistory.testResultDate = this.itemForm.value["testResultDate"];
    this.medicalTestHistory.diag1Av = this.itemForm.value["diag1Av"];
    this.medicalTestHistory.diag1Nr = this.itemForm.value["diag1Nr"];
    this.medicalTestHistory.diag2Av = this.itemForm.value["diag2Av"];
    this.medicalTestHistory.diag2Nr = this.itemForm.value["diag2Nr"];
    this.medicalTestHistory.diag3Av = this.itemForm.value["diag3Av"];
    this.medicalTestHistory.diag3Nr = this.itemForm.value["diag3Nr"];
    this.medicalTestHistory.doctorComments = this.itemForm.value["doctorComments"];
    this.medicalTestHistory.otherInfo = this.itemForm.value["otherInfo"];

    console.log("::::::::::::::::::::::::::");
    console.log(this.medicalTestHistory);

    this.medicareService.saveTestReport(this.medicalTestHistory).subscribe();
    this.saveDone = true;


    }

  }

