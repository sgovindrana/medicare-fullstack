import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from 'src/app/user/doctor';
import { MedicareServices } from 'src/app/services/medicare.service';

@Component({
  selector: 'app-medicare-service-info',
  templateUrl: './medicare-service-info.component.html',
  styleUrls: ['./medicare-service-info.component.css']
})
export class MedicareServiceInfoComponent implements OnInit {

  @Input() medicareItem: Doctor;
 // @Output() addToCartClicked = new EventEmitter();
 @Output() bookAppointment = new EventEmitter();
  isDoctor: boolean;
  isAdmin: boolean;
  isPatient: boolean; 
  cartAddedId: number;

  constructor(private medicareServices: MedicareServices) { }

  ngOnInit() {
    this.isDoctor = this.medicareServices.isDoctor;
    this.isAdmin = this.medicareServices.isAdmin;
    this.isPatient = this.medicareServices.isPatient;
    
    this.medicareServices.bookAppointment = false;

    console.log("##################");
      console.log(this.medicareItem);
    console.log("##################");
  }

  displayAddToCart(id: number) {
    this.cartAddedId = id;
    console.log(this.cartAddedId)
  }

}
