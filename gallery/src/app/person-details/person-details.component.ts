import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../services/people.service';
import {Person} from '../models/person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html'
})
export class PersonDetailsComponent implements OnInit {
  person: Person;
  error: boolean;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) {
  }

  ngOnInit() {
    const personId = this.route.snapshot.paramMap.get('id');
    this.peopleService.getPerson(personId).subscribe(
      person => this.person = person,
      () => this.error = true,
      () => this.loaded = true);
  }
}
