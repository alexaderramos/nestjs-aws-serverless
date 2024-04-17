import axios from 'axios';
import { mapObject } from 'src/shared/mappers/movie.mapper';
import { Movie } from 'src/swapi/domain/models/movie.model';
import { IMoviePort } from 'src/swapi/domain/ports/movie-port.interface';

const BASE_URL = 'https://swapi.py4e.com/api/films';

export class SwapiAdapter implements IMoviePort {
  async getAllMovies(): Promise<Movie[]> {
    const response = await axios.get(BASE_URL);
    return response.data.results.map((film: any) => {
      return mapObject(film);
    });
  }
  async getMovieById(id: string): Promise<Movie | null> {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      const film = response.data;
      return mapObject(film);
    } catch (error) {
      return null;
    }
  }
}
