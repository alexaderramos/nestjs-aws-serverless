import { UserUseCaseService } from 'src/users/application/user-use-case.service';

import { UserController } from './user.controller';
import { ICrudUserRepository } from 'src/users/domain/repository/user-repository.interface';
import { UserService } from 'src/users/domain/services/user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;
  let crudUserRepository: ICrudUserRepository;
  let UserUseCaseService: UserUseCaseService;

  beforeEach(() => {
    userService = new UserService(crudUserRepository);
    userController = new UserController(UserUseCaseService);
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {
      const result = [{ id: 1, name: 'John Doe', lastName: 'Doe' }];
      jest
        .spyOn(userService, 'getAllUsers')
        .mockImplementation(() => Promise.resolve(result));

      expect(await userController.getAllUsers()).toBe(result);
    });
  });

  describe('saveUser', () => {
    it('should return a user', async () => {
      const user = { id: 1, name: 'John Doe', lastName: 'Doe' };
      jest
        .spyOn(userService, 'saveUser')
        .mockImplementation(() => Promise.resolve(user));

      expect(await userController.saveUser(user)).toBe(user);
    });
  });

  describe('getUserById', () => {
    it('should return a user', async () => {
      const user = { id: 1, name: 'John Doe', lastName: 'Doe' };
      jest
        .spyOn(userService, 'getUserById')
        .mockImplementation(() => Promise.resolve(user));

      expect(await userController.getUserById(1)).toBe(user);
    });
  });
});
