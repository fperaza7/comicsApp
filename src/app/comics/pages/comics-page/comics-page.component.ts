import { Component, OnInit } from '@angular/core';
import { Comic } from '../../interfaces/comics.interface';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comics-page',
  templateUrl: './comics-page.component.html',
  styles: [
  ]
})
export class ComicsPageComponent implements OnInit {

  textSearch: string = '';
  isErrorOrNotFound: boolean = false;
  comics: Comic[] = [];
  defaultSearches: string[] = ['Spider-Man', 'Wolverine', 'Hulk', 'Thor'];
  defaultSearchActive: string = '';

  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.search();
  }

  search(textSearch: string = '') {
    this.isErrorOrNotFound = false;
    this.textSearch = textSearch;
    this.comicsService.getComics(this.textSearch).subscribe((res) => {
      if (res.data.results.length == 0) {
        this.isErrorOrNotFound = true;
        this.comics = [];
      } else {
        this.comics = res.data.results;
      }
    }, (err) => {
      this.isErrorOrNotFound = true;
      this.comics = [];
    });
  }

  activateSearchDefault(search: string) {
    if (search == this.defaultSearchActive) {
      return;
    }
    this.defaultSearchActive = search;
    this.comics = [];
    this.search(search);
  }

}
