import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareServiceMenuComponent } from './medicare-service-menu.component';

describe('MedicareServiceMenuComponent', () => {
  let component: MedicareServiceMenuComponent;
  let fixture: ComponentFixture<MedicareServiceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareServiceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareServiceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
