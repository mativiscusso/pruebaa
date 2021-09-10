import { Button, Grid, makeStyles, Theme } from "@material-ui/core";
import MapIcon from "assets/svg/MapIcon";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    floatBtn: {
        padding: theme.spacing(1.5, 2),
        borderRadius: theme.spacing(3),
        position: "fixed",
        bottom: 70,
        margin: "auto",
        zIndex: 10,
    },
}));

export const MapFloatButton: FC = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center">
            <Button
                variant="contained"
                color="primary"
                className={classes.floatBtn}
            >
                <MapIcon />
                ver mapa
            </Button>
        </Grid>
    );
};
