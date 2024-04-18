import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'Cristian', description: 'Nombre' })
  name: string;

  @ApiProperty({ example: 'Ramos', description: 'Apellido' })
  lastName: string;
}
