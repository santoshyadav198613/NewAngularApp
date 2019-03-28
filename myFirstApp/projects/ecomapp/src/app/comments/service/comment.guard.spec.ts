import { TestBed, async, inject } from '@angular/core/testing';

import { CommentGuard } from './comment.guard';

describe('CommentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentGuard]
    });
  });

  it('should ...', inject([CommentGuard], (guard: CommentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
