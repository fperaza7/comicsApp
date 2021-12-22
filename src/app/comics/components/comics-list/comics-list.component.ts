import { Component, Input, OnInit } from '@angular/core';
import { Comic, CreatorsItem } from '../../interfaces/comics.interface';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  @Input() comics: Comic[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  concatCreators(creators: CreatorsItem[]) {
    let concat = '';
    if (creators.length > 0) {
      const newCreators = creators.slice(0, 3);
      console.log(newCreators);
      for (let i = 0; i < newCreators.length; i++) {
        concat += (newCreators[i].name + (newCreators.length - 1 == i ? '' : ', '));
      }
    }
    return concat;
  }

}
