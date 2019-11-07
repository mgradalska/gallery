import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../services/people.service';
import {Person} from '../models/person';
import {ActivatedRoute} from '@angular/router';
import {SwapiResponse} from '../models/swapi-response';
import {SplitService} from '../services/split.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  searchString: string;
  apiData: SwapiResponse;
  people: Array<Person>;
  rows = Array<Array<Person>>();
  error: boolean;
  loaded: boolean;
  currentPage: string;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private splitService: SplitService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
        this.currentPage = this.getCurrentPage();
        this.getPeopleForCurrentPage();
      }
    );
  }

  updateSearchString(newSearchString: string): void {
    this.searchString = newSearchString;
  }

  setInitialValues(): void {
    this.searchString = null;
    this.rows = [];
    this.loaded = false;
  }

  getCurrentPage(): string {
    return this.route.snapshot.paramMap.get('page');
  }

  getPeopleForCurrentPage(): void {
    this.setInitialValues();
    this.peopleService.getAllPeopleForPage(this.currentPage).subscribe(
      data => {
        this.apiData = data;
        this.people = data.results;
      },
      () => this.error = true,
      () => {
        this.rows = this.splitService.splitPeopleToRows(this.people);
        this.loaded = true;
      });
  }
}
