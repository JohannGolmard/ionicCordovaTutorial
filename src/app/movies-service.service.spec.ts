import { TestBed } from '@angular/core/testing';

import { MoviesServiceService } from './movies-service.service';

describe('MoviesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesServiceService = TestBed.get(MoviesServiceService);
    expect(service).toBeTruthy();
  });
});
