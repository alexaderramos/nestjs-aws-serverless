import { MovieModel } from '../models/movie.model';
import { IMovieRepositoryRepository } from '../repositories/movie-repository.interface';

export class MovieService {
  constructor(private readonly moviePort: IMovieRepositoryRepository) {
    this.moviePort = moviePort;
  }
  async getAllMovies(): Promise<MovieModel[]> {
    return this.moviePort.getAllMovies();
  }
  async getMovieById(id: string): Promise<MovieModel | null> {
    return this.moviePort.getMovieById(id);
  }
}
