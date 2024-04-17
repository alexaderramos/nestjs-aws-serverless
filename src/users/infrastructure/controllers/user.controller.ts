import { Controller, Get, Inject, Post } from '@nestjs/common';
import {
  IResponse,
  IUseCaseUserService,
} from 'src/users/application/user-use-case.interface';
import { UserUseCaseService } from 'src/users/application/user-use-case.service';
import { UserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UserUseCaseService)
    private readonly _userService: IUseCaseUserService,
  ) {}

  @Get()
  getAllUsers(): Promise<UserDto[]> {
    return this._userService.getAllUsers();
  }

  @Post()
  saveUser(newUser: UserDto): Promise<IResponse> {
    return this._userService.saveUser(newUser);
  }
}
