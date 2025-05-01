import { VehicleTypeRepository } from "../../repositories/index";
import { IVehicleTypeService } from "../abstract/IVehicleType";

export class VehicleTypeService implements IVehicleTypeService {
  private VehicleTypeRepository: VehicleTypeRepository;

  constructor() {
    this.VehicleTypeRepository = new VehicleTypeRepository();
  }

  public CreateVehicleType = async (data: any): Promise<any> => {
    return await this.VehicleTypeRepository.createVehicleType(data);
  };

  public BulkCreateVehicleType = async (data: any): Promise<any> => {
    return await this.VehicleTypeRepository.bulkCreateVehicleType(data);
  };

  public UpdateVehicleType = async (id: string, data: any): Promise<any> => {
    return await this.VehicleTypeRepository.updateVehicleType(id, data);
  };

  public GetVehicleTypeById = async (id: string): Promise<any> => {
    return await this.VehicleTypeRepository.getVehicleTypeById(id);
  };

  public GetAllVehicleTypes = async (
    page: number,
    limit: number,
    keyword: string,
    orderBy: string,
    sortBy: any,
    filters?: Array<{ column: string; operator?: string; value: string }>
  ): Promise<any> => {
    return await this.VehicleTypeRepository.getAllVehicleTypes(
      page,
      limit,
      keyword,
      orderBy,
      sortBy,
      filters
    );
  };

  public GetAllVehicleTypesForDropdown = async (keyword: string): Promise<any> => {
    return await this.VehicleTypeRepository.getAllVehicleTypesForDropdown(keyword);
  };

  public getVehicleTypeByName = async (name: string): Promise<any> => {
    return await this.VehicleTypeRepository.getVehicleTypeByName(name);
  };

  /* public CountAllVehicleType = async (where: any): Promise<any> => {
    return await this.VehicleTypeRepository.countAllVehicleType(where);
  }; */

  public DeleteVehicleType = async (id: string): Promise<any> => {
    return await this.VehicleTypeRepository.deleteVehicleType(id);
  };

  public BulkDeleteVehicleType = async (ids: string[]): Promise<any> => {
    return await this.VehicleTypeRepository.bulkDeleteVehicleType(ids);
  };
}
