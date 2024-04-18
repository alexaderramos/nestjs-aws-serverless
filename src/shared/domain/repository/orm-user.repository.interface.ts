import {
  IGetUserRepositoryDto,
  IUserRepositoryDto,
} from '../dto/user-repository.dto';

export interface IOrmUserRepository {
  getAllUsers(): Promise<IGetUserRepositoryDto[]>;
  saveUser(newProduct: IUserRepositoryDto): Promise<void>;
  getUserById(id: number): Promise<IGetUserRepositoryDto>;
}
