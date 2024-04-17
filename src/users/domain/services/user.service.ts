import { UserRepositoryModel } from '../models/user.model';
import { ICrudUserRepository } from '../repository/user-repository.interface';

export class UserService {
  constructor(private readonly userPort: ICrudUserRepository) {}

  async getAllUsers(): Promise<UserRepositoryModel[]> {
    return this.userPort.getAllUsers();
  }

  async saveUser(user: UserRepositoryModel): Promise<UserRepositoryModel> {
    return this.userPort.saveUser(user);
  }
}
