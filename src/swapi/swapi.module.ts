/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MovieController } from './infraestructure/controllers/movie.controller';
import { MovieUseCaseService } from './application/movie-user-case.service';
import { MovieRepository } from './domain/repositories/movie-repository';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [MovieUseCaseService, MovieRepository],
})
export class SwapiModule {}
