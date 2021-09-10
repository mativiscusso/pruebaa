import { Button, makeStyles, Theme } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import { TextIcon } from "components/atoms/TextIcon/index";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    roundedButton: {
        borderRadius: theme.spacing(3),
        padding: theme.spacing(1.5, 0),
        display: "flex",
        justifyContent: "center",
        "& > span > span:nth-child(2)": {
            borderLeft: `1px solid ${theme.palette.text.primary}`,
            borderRight: `1px solid ${theme.palette.text.primary}`,
        },
    },
}));

export const MegaFilterButton: FC = () => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            fullWidth
            disableElevation
            className={classes.roundedButton}
            size="small"
        >
            <TextIcon
                icon={<LocationOnIcon />}
                text="Madrid"
                padding="0 1.5rem"
                font="Nunito"
                color="initial"
                textVariant="subtitle1"
                textWeight={700}
            />
            <TextIcon
                icon={<DateRangeIcon />}
                text="Hoy"
                padding="0 1.5rem"
                font="Nunito"
                color="initial"
                textVariant="subtitle1"
                textWeight={700}
            />
            <TextIcon
                icon={<PersonIcon />}
                text="2"
                padding="0 1.5rem"
                font="Nunito"
                color="initial"
                textVariant="subtitle1"
                textWeight={700}
            />
        </Button>
    );
};
