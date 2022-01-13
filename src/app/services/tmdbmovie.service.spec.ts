import { TestBed } from '@angular/core/testing';

import { TMDBmovieService } from './tmdbmovie.service';

describe('TMDBmovieService', () => {
  let service: TMDBmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TMDBmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
