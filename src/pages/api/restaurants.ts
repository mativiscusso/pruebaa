import { restaurants } from "components/organisms/RestaurantList/dataSimulated";
import { IRestaurant } from "interfaces/restaurant";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse<IRestaurant[]>) => {
    res.status(200).json(restaurants);
};
