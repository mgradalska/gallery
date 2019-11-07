import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {
  searchString: string;
  @Output() searchStringChanged = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }
}
