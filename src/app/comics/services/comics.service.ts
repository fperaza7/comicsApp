import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { RESTComicsResponse } from '../interfaces/comics.interface';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private API_PUBLIC_KEY: string = 'f2467f4c870ecbc2d8bccd9786471fc1';
  private API_PRIVATE_KEY: string = 'bad1a92a4fffba4fdda32dd27cfe808b1ad66ca2';
  private API_URL: string = 'https://gateway.marvel.com/v1';
  private API_TS: string = '1';
  private HASH = Md5.hashStr(this.API_TS + this.API_PRIVATE_KEY + this.API_PUBLIC_KEY);


  get httpParams() {
    return new HttpParams()
      .set('ts', this.API_TS)
      .set('apikey', this.API_PUBLIC_KEY)
      .set('hash', this.HASH);
  }

  constructor(private http: HttpClient) { }

  getComics(textSearch: string): Observable<RESTComicsResponse> {
    textSearch = textSearch.trim().toLowerCase();
    const url = `${this.API_URL}/public/comics`;
    let params = this.httpParams;
    if (textSearch != '') {
      params = this.httpParams
        .set('title', textSearch);
    }
    return this.http.get<RESTComicsResponse>(url, { params });
  }

  getComicById(comicId: number): Observable<RESTComicsResponse> {
    const url = `${this.API_URL}/public/comics/${comicId}`;
    const params = this.httpParams;

    return this.http.get<RESTComicsResponse>(url, { params });
  }


}
