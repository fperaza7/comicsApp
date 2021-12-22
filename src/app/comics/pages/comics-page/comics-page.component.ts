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
  loading: boolean = false;

  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.search();
  }

  search(textSearch: string = '') {
    this.loading = true;
    this.isErrorOrNotFound = false;
    this.textSearch = textSearch;
    this.comicsService.getComics(this.textSearch).subscribe((res) => {
      if (res.data.results.length == 0) {
        this.isErrorOrNotFound = true;
        this.comics = [];
      } else {
        this.comics = res.data.results;
      }
      this.loading = false;
    }, (err) => {
      this.isErrorOrNotFound = true;
      this.comics = [];
      this.loading = false;
    });

  }

}
