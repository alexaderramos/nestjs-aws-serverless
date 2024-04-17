export interface IUserRepositoryDto {
  name: string;
  lastName: string;
}

export interface IGetUserRepositoryDto extends IUserRepositoryDto {
  id: number;
}
