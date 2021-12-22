import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comics-searcher',
  templateUrl: './comics-searcher.component.html',
  styles: [
  ]
})
export class ComicsSearcherComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  textSearch: string = '';

  search() {
    this.onEnter.emit(this.textSearch);
    this.textSearch = '';
  }

}
