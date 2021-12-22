import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicDetailComponent } from './comics/pages/comic-detail/comic-detail.component';
import { ComicsPageComponent } from './comics/pages/comics-page/comics-page.component';

const routes: Routes = [
  {
    path: '',
    component: ComicsPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'comics/:comicId',
    component: ComicDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
