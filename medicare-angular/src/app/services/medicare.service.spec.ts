import { TestBed } from '@angular/core/testing';

import { MedicareServices } from './medicare.service';

describe('MedicareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicareServices = TestBed.get(MedicareServices);
    expect(service).toBeTruthy();
  });
});
