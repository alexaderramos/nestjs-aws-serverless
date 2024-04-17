/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/domain/entities/user.entity';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserUseCaseService } from './application/user-use-case.service';
import { UserRepository } from './domain/repository/user.repository';
import { OrmUserRepository } from 'src/shared/domain/repository/orm-user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserUseCaseService, UserRepository, OrmUserRepository],
})
export class UsersModule {}
