import { TestBed } from '@angular/core/testing';

import { RequestCache } from './request-cache.service';

describe('RequestCache', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestCache = TestBed.get(RequestCache);
    expect(service).toBeTruthy();
  });
});
