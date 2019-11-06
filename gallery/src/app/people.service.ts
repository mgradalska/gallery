import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SwapiResponse} from './swapi-response';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  apiUrl = 'https://swapi.co/api';
  peopleUrl = `${this.apiUrl}/people`;

  constructor(private http: HttpClient) {
  }

  getAllPeople(): Observable<SwapiResponse> {
    return this.http.get<SwapiResponse>(`${this.peopleUrl}`);
  }

  getAllPeopleForPage(page: string): Observable<SwapiResponse> {
    return this.http.get<SwapiResponse>(`${this.peopleUrl}/?page=${page}`);
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.peopleUrl}/${id}`);
  }
}
