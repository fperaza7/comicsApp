import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-searches',
  templateUrl: './default-searches.component.html',
  styles: [
  ]
})
export class DefaultSearchesComponent {

  defaultSearchActive: string = '';
  @Input() defaultSearches: string[] = [];
  @Output() onSelect: EventEmitter<string> = new EventEmitter();

  constructor() { }

  activateSearchDefault(search: string) {
    if (search == this.defaultSearchActive) {
      return;
    }
    this.defaultSearchActive = search;
    this.onSelect.emit(search);
  }

}
