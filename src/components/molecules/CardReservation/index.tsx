import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core";
import { AvatarCustom } from "components/atoms/AvatarCustom";
import { IconsSection } from "components/molecules/CardReservation/IconsSection";
import { ellipsizeTextBox } from "helpers/styling/index";
import {
    heightCardReservation,
    heightMediaCardReservation,
    widthCardReservation,
} from "interfaces/cards";
import { IReservation } from "interfaces/reservation";
import Image from "next/image";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        width: widthCardReservation,
        height: heightCardReservation,
    },
    content: {
        padding: theme.spacing(1),
        height: `calc(${heightCardReservation}px - ${heightMediaCardReservation}px)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    media: {
        height: heightMediaCardReservation,
    },
    payment: {
        fontSize: 12,
        textTransform: "uppercase",
        borderRadius: 4,
        backgroundColor: "#FFF",
        textAlign: "center",
    },
}));

export const CardReservation: FC<IReservation> = ({
    image,
    title,
    seller,
    hours,
    price,
    paymentType,
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} elevation={0}>
            <CardActionArea>
                <Box className={classes.media}>
                    <Image
                        src={image}
                        alt={image}
                        width={170}
                        height={heightMediaCardReservation}
                    />
                </Box>
                <CardContent className={classes.content}>
                    <Typography
                        variant="caption"
                        style={{ fontWeight: "bold" }}
                    >
                        {ellipsizeTextBox(title, 35)}
                    </Typography>
                    <AvatarCustom
                        image={seller.image}
                        name={seller.name}
                        aditionalText=" la vende"
                    />
                    <IconsSection price={price} hour={hours} />
                    <Typography className={classes.payment} variant="body2">
                        {paymentType}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
