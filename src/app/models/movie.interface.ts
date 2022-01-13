import { MovieGenre } from './movieGenre.interface';
import { ProductionCountries } from './productionCountries.interface';

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genres: MovieGenre[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  runtime: number | null;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  production_countries: ProductionCountries[];
}
