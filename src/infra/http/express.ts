import Express from "express";
import ParkingLotRepositorySQL from "../Repository/ParkingLotRepositorySQL";
import GetParkingLot from "../../core/usecase/GetParkingLot";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ParkingLotController from "../../controller/ParkingLotController";
const app = new Express();

app.get("/parkingLots/:code", async function (req, res) {
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
  const parkingLot = await getParkingLot.execute(req.params.code);
  res.json(parkingLot);
});

app.get(
  "/parkingLots/:code",
  ExpressAdapter.create(ParkingLotController.getParkingLot)
);

app.listen(3000, () => {
  console.log("Iniciou HTTP");
});
