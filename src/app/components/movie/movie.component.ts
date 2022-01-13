import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/models/cast.interface';
import { Crew } from 'src/app/models/crew.interface';
import { Movie } from 'src/app/models/movie.interface';
import { ProductionCountries } from 'src/app/models/productionCountries.interface';
import { TMDBmovieService } from 'src/app/services/tmdbmovie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie!: Movie;
  countries: ProductionCountries[] = [];
  cast: Cast[] = [];
  crew: Crew[] = [];
  director: Crew[] = [];
  recommendatedMovies: Movie[] = [];

  imgUrl = 'https://image.tmdb.org/t/p/';
  imgSizeBG = 'w1280';
  imgSize = 'w300_and_h450_bestv2';

  isLoading: boolean = true;

  constructor(
    private tmbdMovieService: TMDBmovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovie(movieId);
    this.getMovieCredits(movieId);
    this.getRecommendations(movieId);
  }

  getMovie(id: any): void {
    this.isLoading = true;
    if (isNaN(id) || +id < 62) {
      this.router.navigateByUrl('/');
    } else {
      this.tmbdMovieService.getMovie(id).subscribe((movie) => {
        this.movie = movie;
        this.countries = movie.production_countries;
        this.isLoading = false;
      });
    }
  }

  getMovieCredits(movieId: any): void {
    this.cast = [];
    this.crew = [];
    this.tmbdMovieService.getCredits(movieId).subscribe((credit) => {
      this.crew = credit.crew;
      this.cast = credit.cast;
      this.getDirectors(this.crew);
    });
  }

  getDirectors(crew: Crew[]): void {
    this.director = [];
    for (let person of crew) {
      if (person.job === 'Director') {
        this.director.push(person);
      }
    }
  }

  getRecommendations(movieId: any): void {
    this.recommendatedMovies = [];
    this.tmbdMovieService
      .getRecommendations(movieId, 1)
      .subscribe((movies) => (this.recommendatedMovies = movies.results));
  }
}
