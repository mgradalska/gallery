import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../services/people.service';
import {Person} from '../models/person';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  people: Array<Person>;
  loaded: boolean;
  error: boolean;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe(
      data => this.people = data.results.splice(0, 3),
      error => this.error = true,
      () => this.loaded = true);
  }
}
