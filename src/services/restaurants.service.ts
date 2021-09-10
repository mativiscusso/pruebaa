import { AxiosResponse } from "axios";
import { fetchAPI } from "helpers/axios/api.instance";
import { IRestaurant } from "interfaces/restaurant";

const getAllRestaurants = async (): Promise<IRestaurant[]> => {
    try {
        const res: AxiosResponse<IRestaurant[]> = await fetchAPI({
            method: "get",
            url: "/api/restaurants",
        });

        return res.data.slice(0, 5);
    } catch (err: unknown) {
        throw err;
    }
};

const RestaurantService = {
    getAllRestaurants,
};

export default RestaurantService;
