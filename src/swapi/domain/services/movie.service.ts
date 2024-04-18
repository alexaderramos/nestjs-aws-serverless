import { MovieRespositoryModel } from '../models/movie.model';
import { IMovieRepositoryRepository } from '../repositories/movie-repository.interface';

export class MovieService {
  constructor(private readonly moviePort: IMovieRepositoryRepository) {
    this.moviePort = moviePort;
  }
  async getAllMovies(): Promise<MovieRespositoryModel[]> {
    return this.moviePort.getAllMovies();
  }
  async getMovieById(id: string): Promise<MovieRespositoryModel | null> {
    return this.moviePort.getMovieById(id);
  }
}
