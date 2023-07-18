import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory
  implements ParkingLotRepository
{
  constructor() {}
  getParkingLot(code: string): Promise<ParkingLot> {
    return Promise.resolve(new ParkingLot(code, 5, 8, 22));
  }
}