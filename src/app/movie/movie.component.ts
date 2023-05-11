import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movieget';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  data: Movie[] = [];
  MovieID :string =""
  MovieType :string =""
  MoviePrice : any
  MovieName:string =""
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMoviesWeb().subscribe(data => {
      this.data = data;
    });
  }

  findmovie(value: string) {
    
    this.MovieID=this.data[Number(value)-1].Movieid
    this.MoviePrice=this.data[Number(value)-1].MoviePrice
    this.MovieName=this.data[Number(value)-1].NameMovie
    this.MovieType=this.data[Number(value)-1].TypeMovie
   
  }
}