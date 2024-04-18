import { IResponse } from './../../application/user-use-case.interface';
import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { IUseCaseUserService } from 'src/users/application/user-use-case.interface';
import { UserUseCaseService } from 'src/users/application/user-use-case.service';
import { UserDto, UserResponseDto } from '../dto/user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

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
    type: UserResponseDto,
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
    type: UserDto,
  })
  @ApiBody({ type: UserDto })
  saveUser(@Body() newUser: UserDto): Promise<IResponse> {
    return this._userService.saveUser(newUser);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por id' })
  @ApiResponse({
    status: 200,
    type: UserResponseDto,
  })
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<UserResponseDto> {
    return this._userService.getUserById(id);
  }
}
