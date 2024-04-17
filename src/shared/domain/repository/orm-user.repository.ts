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

  async saveProduct(newProduct: IUserRepositoryDto): Promise<void> {
    await this.save(newProduct);
  }

  async getAllProducts(): Promise<IGetUserRepositoryDto[]> {
    //TODO
    return await this.find();
  }
}
