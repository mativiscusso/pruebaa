import { TitleAndSubtitle } from "components/atoms/TitleAndSubtitle/index";
import { CardReservation } from "components/molecules/CardReservation";
import Carousel from "components/molecules/Carousel";
import { LastCardReservations } from "components/organisms/ReservationList/LastCard/index";
import { IReservation } from "interfaces/reservation";
import { FC, useEffect, useState } from "react";
import ReservationsService from "services/reservations.service";

export const ReservationList: FC = () => {
    const [reservations, setReservations] = useState<IReservation[]>([]);

    useEffect(() => {
        ReservationsService.getAllReservations()
            .then(setReservations)
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            {reservations.length > 0 && (
                <>
                    <TitleAndSubtitle
                        title="Reservas de último momento"
                        subtitle="12 personas han publicado su reserva "
                    />
                    <Carousel>
                        {reservations.map((reservation, i) => (
                            <CardReservation
                                key={`${i}reservation`}
                                {...reservation}
                            />
                        ))}
                        <LastCardReservations />
                    </Carousel>
                </>
            )}
        </>
    );
};
