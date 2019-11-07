import {Component, Input, OnInit} from '@angular/core';
import {SwapiResponse} from '../models/swapi-response';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {
  @Input() apiData: SwapiResponse;
  @Input() currentPage: string;

  previousPage: string;
  nextPage: string;

  constructor() {
  }

  ngOnInit() {
    this.fetchPages();
  }

  fetchPages() {
    this.previousPage = this.getPageFromApiLink(this.apiData.previous);
    this.nextPage = this.getPageFromApiLink(this.apiData.next);
  }

  getPageFromApiLink(apiLink: string) {
    return apiLink ? apiLink.split('=')[1] : null;
  }
}
