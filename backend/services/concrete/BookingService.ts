import { BookingRepository } from "../../repositories/index";
import { IBookingService } from "../abstract/IBooking";

export class BookingService implements IBookingService {
  private BookingRepository: BookingRepository;

  constructor() {
    this.BookingRepository = new BookingRepository();
  }

  public CreateBooking = async (data: any): Promise<any> => {
    return await this.BookingRepository.createBooking(data);
  };

  public BulkCreateBooking = async (data: any): Promise<any> => {
    return await this.BookingRepository.bulkCreateBooking(data);
  };

  public UpdateBooking = async (id: string, data: any): Promise<any> => {
    return await this.BookingRepository.updateBooking(id, data);
  };

  public GetBookingById = async (id: string): Promise<any> => {
    return await this.BookingRepository.getBookingById(id);
  };

  public GetAllBookings = async (
    page: number,
    limit: number,
    keyword: string,
    orderBy: string,
    sortBy: any,
    filters?: Array<{ column: string; operator?: string; value: string }>
  ): Promise<any> => {
    return await this.BookingRepository.getAllBookings(
      page,
      limit,
      keyword,
      orderBy,
      sortBy,
      filters
    );
  };

  public GetAllBookingsForDropdown = async (keyword: string): Promise<any> => {
    return await this.BookingRepository.getAllBookingsForDropdown(keyword);
  };

  public getBookingByName = async (name: string): Promise<any> => {
    return await this.BookingRepository.getBookingByName(name);
  };

  /* public CountAllBooking = async (where: any): Promise<any> => {
    return await this.BookingRepository.countAllBooking(where);
  }; */

  public DeleteBooking = async (id: string): Promise<any> => {
    return await this.BookingRepository.deleteBooking(id);
  };

  public BulkDeleteBooking = async (ids: string[]): Promise<any> => {
    return await this.BookingRepository.bulkDeleteBooking(ids);
  };
}
