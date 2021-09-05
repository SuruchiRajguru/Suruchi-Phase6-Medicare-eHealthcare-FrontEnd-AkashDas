import { TestBed } from '@angular/core/testing';

import { SearchByTextService } from './search-by-text.service';

describe('SearchByTextService', () => {
  let service: SearchByTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
