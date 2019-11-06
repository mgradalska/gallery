import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonSnippetComponent} from './person-snippet.component';

describe('PersonSnippetComponent', () => {
  let component: PersonSnippetComponent;
  let fixture: ComponentFixture<PersonSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonSnippetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
