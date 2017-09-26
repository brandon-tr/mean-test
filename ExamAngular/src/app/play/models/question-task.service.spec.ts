import { TestBed, inject } from '@angular/core/testing';

import { QuestionTaskService } from './question-task.service';

describe('QuestionTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionTaskService]
    });
  });

  it('should be created', inject([QuestionTaskService], (service: QuestionTaskService) => {
    expect(service).toBeTruthy();
  }));
});
