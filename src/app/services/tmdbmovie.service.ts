import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../models/credit.interface';
import { Movie } from '../models/movie.interface';
import { MovieList } from '../models/movieList.interface';

@Injectable({
  providedIn: 'root',
})
export class TMDBmovieService {
  private urlTMDB: string = 'https://api.themoviedb.org/3/movie/';
  private api_key: string = '7ffd485d93ae56f1d0242512a623211a';
  private url!: string;
  //private language: string = 'en-US';
  private language: string = 'es-ES';
  private region: string = 'US';

  constructor(private http: HttpClient) {}

  getMovies(request: string, page: number): Observable<MovieList> {
    this.url =
      this.urlTMDB +
      request +
      '?api_key=' +
      this.api_key +
      '&language' +
      this.language +
      '&page=' +
      page +
      '&region=' +
      this.region;

    return this.http.get<MovieList>(this.url);
  }

  getMovie(id: number): Observable<Movie> {
    this.url =
      this.urlTMDB +
      id +
      '?api_key=' +
      this.api_key +
      '&language=' +
      this.language;

    return this.http.get<Movie>(this.url);
  }

  getCredits(movieId: any): Observable<Credit> {
    this.url =
      this.urlTMDB +
      movieId +
      '/credits?api_key=' +
      this.api_key +
      '&language=' +
      this.language;

    return this.http.get<Credit>(this.url);
  }

  getRecommendations(movieId: any, page: number): Observable<MovieList> {
    this.url =
      this.urlTMDB +
      movieId +
      '/recommendations?api_key=' +
      this.api_key +
      '&language=' +
      this.language +
      '&page=' +
      page;

    return this.http.get<MovieList>(this.url);
  }
}
