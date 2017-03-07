/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminTService } from './admin-t.service';

describe('AdminTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTService]
    });
  });

  it('should ...', inject([AdminTService], (service: AdminTService) => {
    expect(service).toBeTruthy();
  }));
});
