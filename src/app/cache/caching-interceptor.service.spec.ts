import { TestBed } from '@angular/core/testing';

import { CachingInterceptor } from './caching-interceptor.service';

describe('CachingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CachingInterceptor = TestBed.get(CachingInterceptor);
    expect(service).toBeTruthy();
  });
});
