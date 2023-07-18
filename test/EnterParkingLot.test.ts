import EnterParkingLot from "../src/core/usecase/EnterParkingLot";

test("Should enter parking lot", () => {
  const enterParkingLot = new EnterParkingLot();
  const parkingLot = enterParkingLot.execute();
  expect(parkingLot.code).toBe("shopping");
});
