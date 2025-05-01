export interface IUserService {
    CreateUser(data: any): Promise<any>;
  
    BulkCreateUser(data: any): Promise<any>;
  
    UpdateUser(id: string, data: any): Promise<any>;
  
    GetUserById(id: string): Promise<any>;
  
    GetAllUsers(
      page: number,
      limit: number,
      keyword: string,
      orderBy: string,
      sortBy: any,
      filters?: Array<{ column: string; operator?: string; value: string }>
    ): Promise<object>;
  
    GetAllUsersForDropdown(keyword: string): Promise<any>;
  
    getUserByName(name: string): Promise<any>;
  
   // CountAllUser(where: any): Promise<any>;
  
    DeleteUser(id: string): Promise<any>;
  
    BulkDeleteUser(ids: string[]): Promise<any>;
  }
  