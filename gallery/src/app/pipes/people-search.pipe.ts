import {Pipe, PipeTransform} from '@angular/core';
import {Person} from '../models/person';
import {SplitService} from '../services/split.service';

@Pipe({
  name: 'peopleSearch'
})
export class PeopleSearchPipe implements PipeTransform {
  searchString: string;
  rows: Array<Array<Person>>;

  constructor(private splitService: SplitService) {
  }

  transform(rows: Array<Array<Person>>, searchString: string): Array<Array<Person>> {
    this.searchString = searchString;
    this.rows = rows;
    return searchString && rows
      ? this.filterRowsWithPeople()
      : rows;
  }

  filterRowsWithPeople(): Array<Array<Person>> {
    const people: Array<Person> = [];
    this.rows.forEach(row => people.push(...row));
    const filteredPeople = this.filterPeople(people);
    return this.splitService.splitPeopleToRows(filteredPeople);
  }

  filterPeople(people: Array<Person>): Array<Person> {
    return people.filter(person => person.name.toLowerCase().includes(this.searchString.toLowerCase()));
  }
}
