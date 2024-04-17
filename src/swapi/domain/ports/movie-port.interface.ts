import { Movie } from '../models/movie.model';

export interface IMoviePort {
  getAllMovies(): Promise<Movie[]>;
  getMovieById(id: string): Promise<Movie | null>;
}
