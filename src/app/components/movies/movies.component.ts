import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Movie } from 'src/app/models/movie.interface';
import { TMDBmovieService } from 'src/app/services/tmdbmovie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movieList: Movie[] = [];
  moviePages!: number;
  pageIndex: number = 0;

  isLoading: boolean = true;

  constructor(private tmdbMovieService: TMDBmovieService) {}

  ngOnInit(): void {
    this.getMovieList('now_playing', 1);
  }

  getMovieList(request: string, page: number): void {
    this.isLoading = true;
    this.movieList = [];
    this.tmdbMovieService.getMovies(request, page).subscribe((movies) => {
      this.moviePages = movies.total_results;
      this.movieList = movies.results;
      this.isLoading = false;
    });
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;

    console.log(this.pageIndex);
    this.getMovieList('now_playing', this.pageIndex + 1);
  }
}
