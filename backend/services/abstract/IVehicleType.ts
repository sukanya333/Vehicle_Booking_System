export interface IVehicleTypeService {
    CreateVehicleType(data: any): Promise<any>;
  
    BulkCreateVehicleType(data: any): Promise<any>;
  
    UpdateVehicleType(id: string, data: any): Promise<any>;
  
    GetVehicleTypeById(id: string): Promise<any>;
  
    GetAllVehicleTypes(
      page: number,
      limit: number,
      keyword: string,
      orderBy: string,
      sortBy: any,
      filters?: Array<{ column: string; operator?: string; value: string }>
    ): Promise<object>;
  
    GetAllVehicleTypesForDropdown(keyword: string): Promise<any>;
  
    getVehicleTypeByName(name: string): Promise<any>;
  
   // CountAllVehicleType(where: any): Promise<any>;
  
    DeleteVehicleType(id: string): Promise<any>;
  
    BulkDeleteVehicleType(ids: string[]): Promise<any>;
  }
  