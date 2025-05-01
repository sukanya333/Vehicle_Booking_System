export interface IVehicleService {
    CreateVehicle(data: any): Promise<any>;
  
    BulkCreateVehicle(data: any): Promise<any>;
  
    UpdateVehicle(id: string, data: any): Promise<any>;
  
    GetVehicleById(id: string): Promise<any>;
  
    GetAllVehicles(
      page: number,
      limit: number,
      keyword: string,
      orderBy: string,
      sortBy: any,
      filters?: Array<{ column: string; operator?: string; value: string }>
    ): Promise<object>;
  
    GetAllVehiclesForDropdown(keyword: string): Promise<any>;
  
    getVehicleByName(name: string): Promise<any>;
  
    //CountAllVehicle(where: any): Promise<any>;
  
    DeleteVehicle(id: string): Promise<any>;
  
    BulkDeleteVehicle(ids: string[]): Promise<any>;
  }
  