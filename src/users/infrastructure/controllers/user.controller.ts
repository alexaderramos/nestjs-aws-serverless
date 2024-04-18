import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import {
  IResponse,
  IUseCaseUserService,
} from 'src/users/application/user-use-case.interface';
import { UserUseCaseService } from 'src/users/application/user-use-case.service';
import { UserDto } from '../dto/user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserEntity } from 'src/shared/domain/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UserUseCaseService)
    private readonly _userService: IUseCaseUserService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los usuarios' })
  @ApiResponse({
    status: 200,
    type: UserEntity,
    isArray: true,
  })
  getAllUsers(): Promise<UserDto[]> {
    return this._userService.getAllUsers();
  }

  @Post()
  @ApiOperation({ summary: 'Registrar un usuario' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: UserEntity,
  })
  @ApiBody({ type: UserDto })
  saveUser(@Body() newUser: UserDto): Promise<IResponse> {
    return this._userService.saveUser(newUser);
  }
}
