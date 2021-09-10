import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { MegaFilterButton } from "components/atoms/MegaFiltersButton";
import { MapFloatButton } from "components/molecules/MapFloatButton";
import { ReservationList } from "components/organisms/ReservationList/index";
import { RestaurantList } from "components/organisms/RestaurantList/index";
import { useState } from "react";

const useStyles = makeStyles(() => ({
    container: {
        minHeight: "100vh",
    },
}));

export default function Home() {
    const [customer, setCustomer] = useState<string | undefined>(undefined);
    const classes = useStyles();

    return (
        <Container className={classes.container} disableGutters>
            <Box paddingY={2}>
                <Typography variant="h4">
                    {customer
                        ? `¡Hola, ${customer}!`
                        : "¡Te damos la bienvenida!"}
                </Typography>
            </Box>
            <MegaFilterButton />
            <ReservationList />
            <RestaurantList />
            <MapFloatButton />
        </Container>
    );
}
