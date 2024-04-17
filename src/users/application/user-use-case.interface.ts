import { UserDto } from '../infrastructure/dto/user.dto';

export interface IUseCaseUserService {
  getAllUsers(): Promise<UserDto[]>;
  saveUser(newUser: any): Promise<IResponse>;
}

export interface IResponse {
  message: string;
  code: number;
}
