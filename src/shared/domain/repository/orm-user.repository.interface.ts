import {
  IGetUserRepositoryDto,
  IUserRepositoryDto,
} from '../dto/user-repository.dto';

export interface IOrmUserRepository {
  getAllProducts(): Promise<IGetUserRepositoryDto[]>;
  saveProduct(newProduct: IUserRepositoryDto): Promise<void>;
}
