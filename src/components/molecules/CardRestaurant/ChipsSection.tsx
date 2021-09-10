import { Box, Chip, makeStyles, Theme } from "@material-ui/core";
import { FC } from "react";

interface IProps {
    hours: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
    chipSection: {
        display: "flex",
        justifyContent: "space-around",
        paddingTop: ".5rem",
    },
}));

export const ChipsSection: FC<IProps> = ({ hours }) => {
    const classes = useStyles();
    return (
        <Box className={classes.chipSection}>
            {hours &&
                hours.map((item: string, i: number) => (
                    <Chip key={i + "hour"} label={item} size="small" />
                ))}
        </Box>
    );
};
