import { CircularProgress, Grid } from "@material-ui/core";
import { FC } from "react";

export const Spinner: FC = () => {
    return (
        <Grid container justifyContent="center">
            <CircularProgress color="primary" />
        </Grid>
    );
};
