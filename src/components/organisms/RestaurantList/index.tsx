import { Typography } from "@material-ui/core";
import { Spinner } from "components/atoms/Spinner/index";
import { CardRestaurant } from "components/molecules/CardRestaurant";
import { IRestaurant } from "interfaces/restaurant";
import { FC, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RestaurantService from "services/restaurants.service";

export const RestaurantList: FC = () => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

    const fetchMore = async () => {
        const newRestaurants = await RestaurantService.getAllRestaurants();
        setRestaurants([...restaurants, ...newRestaurants]);
    };

    useEffect(() => {
        (async () => {
            setRestaurants(await RestaurantService.getAllRestaurants());
        })();
    }, []);

    return (
        <>
            <InfiniteScroll
                dataLength={restaurants.length}
                next={fetchMore}
                hasMore={true}
                loader={<Spinner />}
                endMessage={
                    <Typography variant="subtitle2" align="center">
                        No hay mas restaurants en la lista...
                    </Typography>
                }
            >
                {restaurants &&
                    restaurants.map((resto, i) => (
                        <CardRestaurant key={`${i}resto`} {...resto} />
                    ))}
            </InfiniteScroll>
        </>
    );
};
