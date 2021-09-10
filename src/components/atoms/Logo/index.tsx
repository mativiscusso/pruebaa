import { makeStyles, Theme, Typography } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    logo: {
        fontWeight: "bold",
        fontSize: 24,
        color: theme.palette.primary.main,
        textTransform: "uppercase",
    },
}));

export const Logo: FC = () => {
    const classes = useStyles();

    return (
        <Typography variant="h1" className={classes.logo}>
            Lamesa
        </Typography>
    );
};
