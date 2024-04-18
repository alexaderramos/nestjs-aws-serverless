import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ example: 'Cristian', description: 'Nombre' })
  @IsString({ message: 'El nombre es requerido' })
  name: string;

  @ApiProperty({ example: 'Ramos', description: 'Apellido' })
  @IsString()
  lastName: string;
}

export class UserResponseDto extends UserDto {
  @ApiProperty({ example: 1, description: 'Identificador' })
  id: number;
}
