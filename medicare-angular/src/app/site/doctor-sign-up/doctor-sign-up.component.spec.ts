import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSignUpComponent } from './doctor-sign-up.component';

describe('DoctorSignUpComponent', () => {
  let component: DoctorSignUpComponent;
  let fixture: ComponentFixture<DoctorSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
