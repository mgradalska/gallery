import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../people.service';
import {Person} from '../person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: Person[];
  rows = [];
  error: boolean;
  loaded: boolean;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe(
      data => this.people = data.results,
      () => this.error = true,
      () => {
        this.splitPeopleToRows();
        this.loaded = true;
      });
  }

  splitPeopleToRows() {
    while (this.people.length) {
      this.rows.push(this.people.splice(0, 3));
    }
  }
}
