import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import { Distance } from "components/atoms/Distance";
import { PriceRange } from "components/atoms/PriceRange/index";
import { ChipsSection } from "components/molecules/CardRestaurant/ChipsSection";
import { NameSection } from "components/molecules/CardRestaurant/NameSection";
import { heightCardRestaurant, widthCardRestaurant } from "interfaces/cards";
import { IRestaurant } from "interfaces/restaurant";
import Image from "next/image";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        width: "100%",
        height: heightCardRestaurant,
        display: "flex",
        margin: theme.spacing(2, 0),
    },
    cardActionArea: {
        display: "flex",
    },
    content: {
        padding: theme.spacing(3, 2),
        paddingRight: theme.spacing(1.5),
        width: `calc(100% - ${widthCardRestaurant}px)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    media: {
        width: widthCardRestaurant,
        height: heightCardRestaurant,
    },
    payment: {
        fontSize: 12,
        textTransform: "uppercase",
    },
}));

export const CardRestaurant: FC<IRestaurant> = ({
    image,
    name,
    category,
    hours,
    priceRange,
    score,
    featured,
    distance,
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} elevation={0}>
            <CardActionArea className={classes.cardActionArea}>
                <Box className={classes.media}>
                    <Image
                        src={image}
                        alt={image}
                        width={widthCardRestaurant}
                        height={heightCardRestaurant}
                    />
                </Box>

                <CardContent className={classes.content}>
                    <NameSection
                        name={name}
                        featured={featured}
                        score={score}
                    />

                    <Typography variant="caption">{category}</Typography>
                    <Grid container justifyContent="flex-start" spacing={0}>
                        <Grid item xs={3}>
                            <PriceRange priceRange={priceRange} />
                        </Grid>
                        <Grid item xs={8}>
                            <Distance distance={distance} />
                        </Grid>
                    </Grid>
                    <ChipsSection hours={hours} />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
