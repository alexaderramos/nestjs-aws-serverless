import { MovieDto } from '../infraestructure/dto/movie.dto';

export interface IUseCaseMovieService {
  getAllMovies(): Promise<MovieDto[]>;
  getMovieById(movieId: string): Promise<MovieDto>;
}

export interface IResponse {
  message: string;
  code: number;
}
