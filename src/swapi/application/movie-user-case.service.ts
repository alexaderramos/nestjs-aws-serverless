import { Inject, Injectable } from '@nestjs/common';
import { MovieDto } from '../infraestructure/dto/movie.dto';
import { IUseCaseMovieService } from './movie-use-case.interface';
import { MovieRepository } from '../domain/repositories/movie-repository';
import { IMovieRepositoryRepository } from '../domain/repositories/movie-repository.interface';

@Injectable()
export class MovieUseCaseService implements IUseCaseMovieService {
  constructor(
    @Inject(MovieRepository)
    private readonly movieRepository: IMovieRepositoryRepository,
  ) {}

  async getAllMovies(): Promise<MovieDto[]> {
    const movies = await this.movieRepository.getAllMovies();
    return movies.map((movie) => movie);
  }
  async getMovieById(movieId: string): Promise<MovieDto> {
    return await this.movieRepository.getMovieById(movieId);
  }
}
