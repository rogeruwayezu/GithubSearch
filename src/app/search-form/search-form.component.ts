import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchTerm: string;
  @Output() search_key = new EventEmitter<any>();
  search() {
    this.search_key.emit(this.searchTerm);
    this.searchTerm = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
