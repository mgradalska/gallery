import {Person} from './person';

export interface SwapiResponse {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}
