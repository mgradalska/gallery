import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-person-snippet',
  templateUrl: './person-snippet.component.html'
})
export class PersonSnippetComponent implements OnInit {

  @Input() person: Person;

  constructor() {
  }

  ngOnInit() {
  }

  getPersonId() {
    return this.person.url.split('/').slice(-2)[0];
  }
}
