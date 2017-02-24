/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminLoanService } from './admin-loan.service';

describe('AdminLoanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminLoanService]
    });
  });

  it('should ...', inject([AdminLoanService], (service: AdminLoanService) => {
    expect(service).toBeTruthy();
  }));
});
