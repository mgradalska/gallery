import {TestBed} from '@angular/core/testing';

import {PeopleListComponent} from './people-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Person} from "../person";

describe('PeopleListComponent', () => {
    let component: PeopleListComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            providers: [PeopleListComponent]
        });
        component = TestBed.get(PeopleListComponent);
    });

    it('#setInitialValues should set proper values', () => {
        component.rows = [1, 2, 3];
        component.loaded = true;
        component.setInitialValues();
        expect(component.rows).toEqual([]);
        expect(component.loaded).toEqual(false);
    });

    it('#splitPeopleToRows should split 6 length array', () => {
        const mockPerson = {} as Person;
        component.people = [mockPerson, mockPerson, mockPerson, mockPerson, mockPerson, mockPerson];
        component.splitPeopleToRows();
        expect(component.rows.length).toEqual(2);
        component.rows.forEach(row => expect(row.length).toEqual(3));
    });

    it('#splitPeopleToRows should split 7 length array', () => {
        const mockPerson = {} as Person;
        component.people = [mockPerson, mockPerson, mockPerson, mockPerson, mockPerson, mockPerson, mockPerson];
        component.splitPeopleToRows();
        expect(component.rows.length).toEqual(3);
    });
});
