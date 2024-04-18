import { ApiProperty } from '@nestjs/swagger';

export class MovieDto {
  @ApiProperty({ example: 'A New Hope', description: 'Titulo' })
  titulo: string;

  @ApiProperty({ example: 4, description: 'Episodio' })
  id_episodio: number;

  @ApiProperty({
    example: 'It is a period of civil war.',
    description: 'Texto de apertura',
  })
  texto_apertura: string;

  @ApiProperty({ example: 'George Lucas', description: 'Director' })
  director: string;

  @ApiProperty({
    example: 'Gary Kurtz, Rick McCallum',
    description: 'Productor',
  })
  @ApiProperty({
    example: 'Gary Kurtz, Rick McCallum',
    description: 'Fecha de lanzamiento',
  })
  productor: string;

  @ApiProperty({ example: '1997-02-26', description: 'Director' })
  fecha_lanzamiento: string;

  @ApiProperty({
    example: ['https://swapi.py4e.com/api/people/1/'],
    description: 'Characters',
  })
  personajes: string[];

  @ApiProperty({
    example: ['https://swapi.py4e.com/api/planets/1/'],
    description: 'Planets',
  })
  planetas: string[];

  @ApiProperty({
    example: ['https://swapi.py4e.com/api/starships/2/'],
    description: 'Starships',
  })
  naves_espaciales: string[];

  @ApiProperty({
    example: ['https://swapi.py4e.com/api/vehicles/4/'],
    description: 'Vehicles',
  })
  vehiculos: any;

  @ApiProperty({
    example: ['https://swapi.py4e.com/api/species/1/'],
    description: 'Species',
  })
  especies: string[];

  @ApiProperty({
    example: '2014-12-10T14:23:31.880000Z',
    description: 'Creado',
  })
  creado: string;

  @ApiProperty({
    example: '2014-12-10T14:23:31.880000Z',
    description: 'Creado',
  })
  editado: string;

  @ApiProperty({
    example: 'https://swapi.py4e.com/api/films/1/',
    description: 'Url',
  })
  url: string;
}
