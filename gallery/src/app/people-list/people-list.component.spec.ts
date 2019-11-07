import {TestBed} from '@angular/core/testing';

import {PeopleListComponent} from './people-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Person} from "../models/person";

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
        component.rows = [[{} as Person]];
        component.loaded = true;
        component.setInitialValues();
        expect(component.rows).toEqual([]);
        expect(component.loaded).toEqual(false);
    });
});
