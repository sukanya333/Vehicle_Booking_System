import { VehicleRepository } from "../../repositories/index";
import { IVehicleService } from "../abstract/IVehicle";

export class VehicleService implements IVehicleService {
  private VehicleRepository: VehicleRepository;

  constructor() {
    this.VehicleRepository = new VehicleRepository();
  }

  public CreateVehicle = async (data: any): Promise<any> => {
    return await this.VehicleRepository.createVehicle(data);
  };

  public BulkCreateVehicle = async (data: any): Promise<any> => {
    return await this.VehicleRepository.bulkCreateVehicle(data);
  };

  public UpdateVehicle = async (id: string, data: any): Promise<any> => {
    return await this.VehicleRepository.updateVehicle(id, data);
  };

  public GetVehicleById = async (id: string): Promise<any> => {
    return await this.VehicleRepository.getVehicleById(id);
  };

  public GetAllVehicles = async (
    page: number,
    limit: number,
    keyword: string,
    orderBy: string,
    sortBy: any,
    filters?: Array<{ column: string; operator?: string; value: string }>
  ): Promise<any> => {
    return await this.VehicleRepository.getAllVehicles(
      page,
      limit,
      keyword,
      orderBy,
      sortBy,
      filters
    );
  };

  public GetAllVehiclesForDropdown = async (keyword: string): Promise<any> => {
    return await this.VehicleRepository.getAllVehiclesForDropdown(keyword);
  };

  public getVehicleByName = async (name: string): Promise<any> => {
    return await this.VehicleRepository.getVehicleByName(name);
  };

  /* public CountAllVehicle = async (where: any): Promise<any> => {
    return await this.VehicleRepository.countAllVehicle(where);
  }; */

  public DeleteVehicle = async (id: string): Promise<any> => {
    return await this.VehicleRepository.deleteVehicle(id);
  };

  public BulkDeleteVehicle = async (ids: string[]): Promise<any> => {
    return await this.VehicleRepository.bulkDeleteVehicle(ids);
  };
}
