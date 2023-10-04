import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCheckupRequestComponent } from './edit-checkup-request.component';

describe('EditCheckupRequestComponent', () => {
  let component: EditCheckupRequestComponent;
  let fixture: ComponentFixture<EditCheckupRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCheckupRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCheckupRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
