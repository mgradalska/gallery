import {TestBed} from '@angular/core/testing';
import {PeopleSearchPipe} from './people-search.pipe';
import {PeopleListComponent} from '../people-list/people-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Person} from '../models/person';


describe('PeopleSearchPipe', () => {
  let pipe: PeopleSearchPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleSearchPipe]
    });
    pipe = TestBed.get(PeopleSearchPipe);
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('#filterPeople should filter people by name with a', () => {
    pipe.searchString = 'a';
    const personWithA = {name: 'Abc'} as Person;
    const personWithZ = {name: 'xYz'} as Person;
    const mockPeople = [personWithA, personWithZ];
    const filtered = pipe.filterPeople(mockPeople);
    expect(filtered.length).toEqual(1);
    expect(filtered[0]).toEqual(personWithA);
  });

  it('#filterPeople should filter people by name with z', () => {
    pipe.searchString = 'z';
    const personWithA = {name: 'Abc'} as Person;
    const personWithZ = {name: 'xYz'} as Person;
    const mockPeople = [personWithA, personWithZ];
    const filtered = pipe.filterPeople(mockPeople);
    expect(filtered.length).toEqual(1);
    expect(filtered[0]).toEqual(personWithZ);
  });

  it('#filterPeople should return empty list', () => {
    pipe.searchString = 'h';
    const personWithA = {name: 'Abc'} as Person;
    const personWithZ = {name: 'xYz'} as Person;
    const mockPeople = [personWithA, personWithZ];
    const filtered = pipe.filterPeople(mockPeople);
    expect(filtered.length).toEqual(0);
  });
});
