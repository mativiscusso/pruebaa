import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { IScore } from "interfaces/icons";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    scoreArea: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        color: (props: IScore) =>
            props.color ? props.color : theme.palette.primary.dark,
    },
}));

export const Score: FC<IScore> = (props) => {
    const { score, viewBox, textVariant = "caption" } = props;
    const classes = useStyles(props);
    return (
        <Grid item xs={2} className={classes.scoreArea}>
            <StarIcon viewBox={viewBox} />
            <Typography variant={textVariant}>{score}</Typography>
        </Grid>
    );
};
