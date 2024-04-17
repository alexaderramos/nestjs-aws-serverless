import { Movie } from '../models/movie.model';
import { IMoviePort } from '../ports/movie-port.interface';

export class MovieService {
  constructor(private readonly moviePort: IMoviePort) {
    this.moviePort = moviePort;
  }
  async getAllMovies(): Promise<Movie[]> {
    return this.moviePort.getAllMovies();
  }
  async getMovieById(id: string): Promise<Movie | null> {
    return this.moviePort.getMovieById(id);
  }
}
