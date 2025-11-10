import { TestBed } from '@angular/core/testing';

import { SportApi } from './sport-api';

describe('SportApi', () => {
  let service: SportApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
