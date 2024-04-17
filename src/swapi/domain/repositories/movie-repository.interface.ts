import { MovieModel } from '../models/movie.model';

export interface IMovieRepositoryRepository {
  getAllMovies(): Promise<MovieModel[]>;
  getMovieById(id: string): Promise<MovieModel | null>;
}
