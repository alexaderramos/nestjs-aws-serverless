import { Inject, Injectable } from '@nestjs/common';
import { ICrudUserRepository } from './user-repository.interface';
import {
  SaveUserRespositoryModel,
  UserRepositoryModel,
} from '../models/user.model';
import { IOrmUserRepository } from 'src/shared/domain/repository/orm-user.repository.interface';
import { OrmUserRepository } from 'src/shared/domain/repository/orm-user.repository';

@Injectable()
export class UserRepository implements ICrudUserRepository {
  constructor(
    @Inject(OrmUserRepository)
    private readonly ormUserRepository: IOrmUserRepository,
  ) {}

  async getAllUsers(): Promise<UserRepositoryModel[]> {
    const allUsers = await this.ormUserRepository.getAllProducts();
    return allUsers.map((user) => {
      return {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
      };
    });
  }
  async saveUser(newUser: SaveUserRespositoryModel): Promise<void> {
    await this.ormUserRepository.saveProduct(newUser);
  }
}
