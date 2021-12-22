import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComicsPageComponent } from './pages/comics-page/comics-page.component';
import { ComicsListComponent } from './components/comics-list/comics-list.component';
import { ComicsSearcherComponent } from './components/comics-searcher/comics-searcher.component';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';



@NgModule({
  declarations: [
    ComicsPageComponent,
    ComicsListComponent,
    ComicsSearcherComponent,
    ComicDetailComponent
  ],
  exports: [
    ComicsPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ComicsModule { }
