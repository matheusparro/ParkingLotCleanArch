import ParkedCar from "../entity/ParkedCar";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
  parkingLotRepository: ParkingLotRepository;
  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository;
  }
  async execute(code: string, plate: string, date: Date) {
    const parkedCar = new ParkedCar(code, plate, date);
    const parkingLot = await this.parkingLotRepository.getParkingLot(code);
    if (!parkingLot.isOpen(parkedCar.date))
      throw new Error("the park lot is closed");

    if (parkingLot.isFull()) throw new Error("the park lot is full");
    await this.parkingLotRepository.saveParkedCar(
      parkedCar.code,
      parkedCar.plate,
      parkedCar.date
    );
    return parkingLot;
  }
}
