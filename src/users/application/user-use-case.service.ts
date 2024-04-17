import { Inject, Injectable } from '@nestjs/common';
import { IResponse, IUseCaseUserService } from './user-use-case.interface';
import { ICrudUserRepository } from '../domain/repository/user-repository.interface';
import { UserRepository } from '../domain/repository/user.repository';
import { UserDto } from '../infrastructure/dto/user.dto';

@Injectable()
export class UserUseCaseService implements IUseCaseUserService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: ICrudUserRepository,
  ) {}
  async getAllUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.getAllUsers();
    return users.map((user) => user);
  }
  async saveUser(newUser: UserDto): Promise<IResponse> {
    await this.userRepository.saveUser(newUser);
    return {
      message: 'User saved successfully',
      code: 201,
    };
  }
}
