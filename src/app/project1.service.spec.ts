import { TestBed } from '@angular/core/testing';

import { Project1Service } from './project1.service';

describe('Project1Service', () => {
  let service: Project1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Project1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
