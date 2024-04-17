import { UserRepositoryModel } from '../models/user.model';

export interface ICrudUserRepository {
  getAllUsers(): Promise<UserRepositoryModel[]>;
  saveUser(newUser: UserRepositoryModel): Promise<any>;
}
