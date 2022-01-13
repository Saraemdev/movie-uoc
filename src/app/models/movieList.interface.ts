import { Movie } from './movie.interface';

export interface MovieList {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
