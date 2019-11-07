import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonSnippetComponent} from './person-snippet.component';
import {Person} from '../models/person';
import {RouterTestingModule} from "@angular/router/testing";

describe('PersonSnippetComponent', () => {
    let component: PersonSnippetComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [PersonSnippetComponent]
      });
      component = TestBed.get(PersonSnippetComponent);
    });

    it('#getPersonId should return id part from string', () => {
        const mockString = 'test/test/id/';
        component.person = {url: mockString} as Person;
        const returnedId = component.getPersonId();
        expect(returnedId).toEqual('id');
    });
});
