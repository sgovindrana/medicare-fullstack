import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareServiceInfoComponent } from './medicare-service-info.component';

describe('MedicareServiceInfoComponent', () => {
  let component: MedicareServiceInfoComponent;
  let fixture: ComponentFixture<MedicareServiceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareServiceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareServiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
