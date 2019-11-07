import {Injectable} from '@angular/core';
import {Person} from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class SplitService {

  constructor() {
  }

  splitPeopleToRows(people: Array<Person>): Array<Array<Person>> {
    const rows: Array<Array<Person>> = [];
    while (people.length) {
      rows.push(people.splice(0, 3));
    }
    return rows;
  }
}
