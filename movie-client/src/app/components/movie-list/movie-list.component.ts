import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] =[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(results => {
      console.log(results)
      this.movies = results;
    });
  }

  updateWatched(){
    console.log("Watched!");
  }

}
