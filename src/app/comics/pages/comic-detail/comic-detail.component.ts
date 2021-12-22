import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Comic } from '../../interfaces/comics.interface';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  comic!: Comic;

  constructor(
    private activetedRoute: ActivatedRoute,
    private comicsService: ComicsService
  ) { }

  ngOnInit(): void {
    this.activetedRoute.params
      .pipe(
        switchMap(({ comicId }) => this.comicsService.getComicById(comicId)),
        tap(console.log)
      )
      .subscribe(res => this.comic = res.data.results[0])
  }


}
