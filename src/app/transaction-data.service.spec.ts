import { TestBed } from '@angular/core/testing';

import { TransactionDataService } from './transaction-data.service';

describe('TransactionDataService', () => {
  let service: TransactionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
