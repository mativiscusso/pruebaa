import { AxiosResponse } from "axios";
import { fetchAPI } from "helpers/axios/api.instance";
import { IReservation } from "interfaces/reservation";

const getAllReservations = async (): Promise<IReservation[]> => {
    try {
        const res: AxiosResponse<IReservation[]> = await fetchAPI({
            method: "get",
            url: "/api/reservations",
        });

        return res.data;
    } catch (err: unknown) {
        throw err;
    }
};

const ReservationService = {
    getAllReservations,
};

export default ReservationService;
