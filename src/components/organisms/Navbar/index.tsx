import { IconButton, makeStyles, Theme, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import FilterIcon from "assets/svg/FilterIcon";
import LogoIcon from "assets/svg/LogoIcon";
import SearchIcon from "assets/svg/SearchIcon";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    appbar: {
        height: 56,
        backgroundColor: "#fff",
    },
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
    },
}));

export const Navbar: FC = () => {
    const classes = useStyles();

    return (
        <AppBar
            position="sticky"
            color="transparent"
            elevation={0}
            className={classes.appbar}
        >
            <Toolbar className={classes.navbar}>
                <IconButton color="inherit" aria-label="menu">
                    <FilterIcon />
                </IconButton>
                <LogoIcon />
                <IconButton color="inherit" aria-label="menu">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
