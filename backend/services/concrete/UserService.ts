import { UserRepository } from "../../repositories/index";
import { IUserService } from "../abstract/IUser";

export class UserService implements IUserService {
  private UserRepository: UserRepository;

  constructor() {
    this.UserRepository = new UserRepository();
  }

  public CreateUser = async (data: any): Promise<any> => {
    return await this.UserRepository.createUser(data);
  };

  public BulkCreateUser = async (data: any): Promise<any> => {
    return await this.UserRepository.bulkCreateUser(data);
  };

  public UpdateUser = async (id: string, data: any): Promise<any> => {
    return await this.UserRepository.updateUser(id, data);
  };

  public GetUserById = async (id: string): Promise<any> => {
    return await this.UserRepository.getUserById(id);
  };

  public GetAllUsers = async (
    page: number,
    limit: number,
    keyword: string,
    orderBy: string,
    sortBy: any,
    filters?: Array<{ column: string; operator?: string; value: string }>
  ): Promise<any> => {
    return await this.UserRepository.getAllUsers(
      page,
      limit,
      keyword,
      orderBy,
      sortBy,
      filters
    );
  };

  public GetAllUsersForDropdown = async (keyword: string): Promise<any> => {
    return await this.UserRepository.getAllUsersForDropdown(keyword);
  };

  public getUserByName = async (name: string): Promise<any> => {
    return await this.UserRepository.getUserByName(name);
  };

  /* public CountAllUser = async (where: any): Promise<any> => {
    return await this.UserRepository.countAllUser(where);
  } */;

  public DeleteUser = async (id: string): Promise<any> => {
    return await this.UserRepository.deleteUser(id);
  };

  public BulkDeleteUser = async (ids: string[]): Promise<any> => {
    return await this.UserRepository.bulkDeleteUser(ids);
  };
}
