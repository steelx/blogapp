import { TestBed, inject } from '@angular/core/testing';

import { PostsPaginationService } from './posts-pagination.service';

describe('PostsPaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsPaginationService]
    });
  });

  it('should be created', inject([PostsPaginationService], (service: PostsPaginationService) => {
    expect(service).toBeTruthy();
  }));
});
