import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../people.service';
import {Person} from '../person';
import {ActivatedRoute, Router} from '@angular/router';
import {SwapiResponse} from '../swapi-response';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  apiData: SwapiResponse;
  people: Person[];
  rows = [];
  error: boolean;
  loaded: boolean;
  currentPage: string;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.currentPage = this.getCurrentPage();
        this.getPeopleForCurrentPage();
      }
    );
  }

  setInitialValues() {
    this.rows = [];
    this.loaded = false;
  }

  getCurrentPage(): string {
    return this.route.snapshot.paramMap.get('page');
  }

  getPeopleForCurrentPage() {
    this.setInitialValues();
    this.peopleService.getAllPeopleForPage(this.currentPage).subscribe(
      data => {
        this.apiData = data;
        this.people = data.results;
      },
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
