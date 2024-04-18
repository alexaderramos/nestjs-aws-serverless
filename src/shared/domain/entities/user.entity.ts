import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty({ example: 1, description: 'Identificador' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Cristian', description: 'Nombre' })
  name: string;

  @Column()
  @ApiProperty({ example: 'Ramos', description: 'Apellido' })
  lastName: string;
}
