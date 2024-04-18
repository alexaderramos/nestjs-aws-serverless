import {
  SaveUserRespositoryModel,
  UserRepositoryModel,
} from '../models/user.model';

export interface ICrudUserRepository {
  getAllUsers(): Promise<UserRepositoryModel[]>;
  saveUser(newUser: SaveUserRespositoryModel): Promise<any>;
  getUserById(id: number): Promise<UserRepositoryModel>;
}
