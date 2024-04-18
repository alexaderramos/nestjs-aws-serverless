import { UserDto, UserResponseDto } from '../infrastructure/dto/user.dto';

export interface IUseCaseUserService {
  getAllUsers(): Promise<UserDto[]>;
  saveUser(newUser: any): Promise<IResponse>;
  getUserById(id: number): Promise<UserResponseDto>;
}

export interface IResponse {
  message: string;
  code: number;
}
