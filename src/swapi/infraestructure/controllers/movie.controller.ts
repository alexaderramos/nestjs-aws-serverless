import { Controller, Get, Inject, Param } from '@nestjs/common';
import { IUseCaseMovieService } from 'src/swapi/application/movie-use-case.interface';
import { MovieUseCaseService } from 'src/swapi/application/movie-user-case.service';
import { MovieDto } from '../dto/movie.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('swapi/movies')
export class MovieController {
  constructor(
    @Inject(MovieUseCaseService)
    private readonly _movieService: IUseCaseMovieService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las peliculas' })
  @ApiResponse({
    description: 'Lista de todas las peliculas',
    status: 200,
    type: MovieDto,
    isArray: true,
  })
  getAllMovies(): Promise<MovieDto[]> {
    return this._movieService.getAllMovies();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una pelicula por id' })
  @ApiResponse({
    description: 'Pelicula por id',
    status: 200,
    type: MovieDto,
  })
  @ApiParam({ name: 'id', type: String })
  getMovieById(@Param('id') id: string): Promise<MovieDto> {
    return this._movieService.getMovieById(id);
  }
}
