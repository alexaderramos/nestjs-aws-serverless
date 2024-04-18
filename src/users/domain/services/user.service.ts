import { UserRepositoryModel } from '../models/user.model';
import { ICrudUserRepository } from '../repository/user-repository.interface';

export class UserService {
  constructor(private readonly userService: ICrudUserRepository) {}

  async getAllUsers(): Promise<UserRepositoryModel[]> {
    return this.userService.getAllUsers();
  }

  async saveUser(user: UserRepositoryModel): Promise<UserRepositoryModel> {
    return this.userService.saveUser(user);
  }

  async getUserById(id: number): Promise<UserRepositoryModel> {
    return this.userService.getUserById(id);
  }
}
