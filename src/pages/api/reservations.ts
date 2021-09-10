import { reservations } from "components/organisms/RestaurantList/dataSimulated";
import { IReservation } from "interfaces/reservation";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse<IReservation[]>) => {
    res.status(200).json(reservations);
};
