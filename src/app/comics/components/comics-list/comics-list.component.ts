import { Component, Input } from '@angular/core';
import { Comic, CreatorsItem } from '../../interfaces/comics.interface';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent {

  @Input() comics: Comic[] = [];

  constructor() { }

  concatCreators(creators: CreatorsItem[]) {
    let concat = '';
    if (creators.length > 0) {
      const newCreators = creators.slice(0, 3);
      for (let i = 0; i < newCreators.length; i++) {
        concat += (newCreators[i].name + (newCreators.length - 1 == i ? '' : ', '));
      }
    }
    return concat;
  }

}
