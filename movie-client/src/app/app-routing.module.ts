import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieNewComponent } from './components/movie-new/movie-new.component';

const routes: Routes = [

  {
    path: "",
    pathMatch: "full",
    component: MovieListComponent
  }, 
  {
    path: "new",
    component: MovieNewComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
