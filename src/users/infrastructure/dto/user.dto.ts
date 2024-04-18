import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ example: 'Cristian', description: 'Nombre' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Ramos', description: 'Apellido' })
  @IsString()
  lastName: string;
}
