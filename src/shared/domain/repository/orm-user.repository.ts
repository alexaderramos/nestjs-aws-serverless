import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { IOrmUserRepository } from './orm-user.repository.interface';
import {
  IGetUserRepositoryDto,
  IUserRepositoryDto,
} from '../dto/user-repository.dto';

@Injectable()
export class OrmUserRepository
  extends Repository<UserEntity>
  implements IOrmUserRepository
{
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async saveUser(newUser: IUserRepositoryDto): Promise<void> {
    await this.save(newUser);
  }

  async getAllUsers(): Promise<IGetUserRepositoryDto[]> {
    return await this.find();
  }

  async getUserById(id: number): Promise<IGetUserRepositoryDto> {
    return await this.findOneBy({ id: id });
  }
}
