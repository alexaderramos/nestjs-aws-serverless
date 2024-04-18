import { mapObject } from 'src/shared/mappers/movie.mapper';
import { MovieRespositoryModel } from '../models/movie.model';
import { IMovieRepositoryRepository } from './movie-repository.interface';
import axios from 'axios';
import { Injectable, NotFoundException } from '@nestjs/common';
const BASE_URL = 'https://swapi.py4e.com/api/films';

@Injectable()
export class MovieRepository implements IMovieRepositoryRepository {
  constructor() {}

  async getAllMovies(): Promise<MovieRespositoryModel[]> {
    const response = await axios.get(BASE_URL);
    return response.data.results.map((film: any) => {
      return mapObject(film);
    });
  }
  async getMovieById(id: string): Promise<MovieRespositoryModel | null> {
    try {
      const response = await axios.get(`${BASE_URL}/${id}/`);
      const film = response.data;
      return mapObject(film);
    } catch (error) {
      throw new NotFoundException('Movie not found');
    }
  }
}
