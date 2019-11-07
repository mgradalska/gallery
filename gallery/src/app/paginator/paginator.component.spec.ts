import {TestBed} from '@angular/core/testing';

import {PaginatorComponent} from './paginator.component';

describe('PaginatorComponent', () => {
    let component: PaginatorComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PaginatorComponent]
        });
        component = TestBed.get(PaginatorComponent);
    });

    it('#getPageFromApiLink should fetch proper page', () => {
        const mockApiLink = 'test?=1';
        const returnedPage = component.getPageFromApiLink(mockApiLink);
        expect(returnedPage).toEqual('1');
    });

    it('#getPageFromApiLink should fetch null page', () => {
        const mockApiLink = null;
        const returnedPage = component.getPageFromApiLink(mockApiLink);
        expect(returnedPage).toEqual(null);
    });
});
