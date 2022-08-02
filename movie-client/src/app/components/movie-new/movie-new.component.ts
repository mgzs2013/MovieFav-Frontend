import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.scss']
})
export class MovieNewComponent implements OnInit {

  newMove: Movie = new Movie;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.newMove = new Movie();
  }

  createMovie(){
    this.service.createMovie(this.newMove).subscribe();
  }

}
