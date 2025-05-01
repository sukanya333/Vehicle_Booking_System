export interface IBookingService {
    CreateBooking(data: any): Promise<any>;
  
    BulkCreateBooking(data: any): Promise<any>;
  
    UpdateBooking(id: string, data: any): Promise<any>;
  
    GetBookingById(id: string): Promise<any>;
  
    GetAllBookings(
      page: number,
      limit: number,
      keyword: string,
      orderBy: string,
      sortBy: any,
      filters?: Array<{ column: string; operator?: string; value: string }>
    ): Promise<object>;
  
    GetAllBookingsForDropdown(keyword: string): Promise<any>;
  
    getBookingByName(name: string): Promise<any>;
  
    //CountAllBooking(where: any): Promise<any>;
  
    DeleteBooking(id: string): Promise<any>;
  
    BulkDeleteBooking(ids: string[]): Promise<any>;
  }
  