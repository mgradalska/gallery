import {TestBed} from '@angular/core/testing';

import {SplitService} from './split.service';
import {Person} from '../models/person';

describe('SplitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplitService = TestBed.get(SplitService);
    expect(service).toBeTruthy();
  });

  it('#splitPeopleToRows should split 6 people to rows', () => {
    const service: SplitService = TestBed.get(SplitService);
    const mockPerson = {} as Person;
    const mockPeople = [mockPerson, mockPerson, mockPerson, mockPerson, mockPerson, mockPerson];
    const splitted = service.splitPeopleToRows(mockPeople);
    expect(splitted.length).toEqual(2);
  });

  it('#splitPeopleToRows should split 7 people to rows', () => {
    const service: SplitService = TestBed.get(SplitService);
    const mockPerson = {} as Person;
    const mockPeople = [mockPerson, mockPerson, mockPerson, mockPerson, mockPerson, mockPerson, mockPerson];
    const splitted = service.splitPeopleToRows(mockPeople);
    expect(splitted.length).toEqual(3);
  });
});
