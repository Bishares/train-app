import { TestBed } from '@angular/core/testing';

import { DepartureArrivalService } from './departure-arrival.service';

describe('DepartureArrivalService', () => {
  let service: DepartureArrivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartureArrivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
