import { MovieRespositoryModel } from '../models/movie.model';

export interface IMovieRepositoryRepository {
  getAllMovies(): Promise<MovieRespositoryModel[]>;
  getMovieById(id: string): Promise<MovieRespositoryModel | null>;
}
