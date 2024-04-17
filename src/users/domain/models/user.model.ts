export interface UserRepositoryModel {
  id: number;
  name: string;
  lastName: string;
}

export type SaveUserRespositoryModel = Omit<UserRepositoryModel, 'id'>;
