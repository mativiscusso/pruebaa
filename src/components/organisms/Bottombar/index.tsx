import {
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
    Theme,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import ReservationIcon from "assets/svg/ReservationIcon";
import { FC, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    bottombar: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
    },
    label: {
        fontFamily: theme.typography.body2.fontFamily,
    },
}));

export const Bottombar: FC = () => {
    const classes = useStyles();
    const [value, setValue] = useState<number>(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className={classes.bottombar}
        >
            <BottomNavigationAction
                className={classes.label}
                label="Inicio"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                className={classes.label}
                label="Reservas"
                icon={<ReservationIcon />}
            />
            <BottomNavigationAction
                className={classes.label}
                label="Alertas"
                icon={<NotificationsIcon />}
            />
            <BottomNavigationAction
                className={classes.label}
                label="Perfil"
                icon={<PersonIcon />}
            />
        </BottomNavigation>
    );
};
