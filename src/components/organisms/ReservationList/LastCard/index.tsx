import {
    Card,
    CardActionArea,
    makeStyles,
    Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { heightCardReservation, widthCardReservation } from "interfaces/cards";
import React, { FC } from "react";

const useStyles = makeStyles({
    card: {
        width: widthCardReservation,
        height: heightCardReservation,
    },
    cardArea: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
});

export const LastCardReservations: FC = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.cardArea}>
                <ArrowForwardIcon color="primary" />
                <Typography variant="h5" color="primary">
                    Ver todas
                </Typography>
            </CardActionArea>
        </Card>
    );
};
