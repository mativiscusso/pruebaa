import { Grid, Typography } from "@material-ui/core";
import FeaturedRestoIcon from "assets/svg/FeaturedRestoIcon";
import { Score } from "components/atoms/Score";
import { ellipsizeTextBox } from "helpers/styling/index";
import { FC } from "react";

interface IProps {
    name: string;
    featured: boolean;
    score: number;
}

export const NameSection: FC<IProps> = ({ name, featured, score }) => {
    return (
        <Grid
            container
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item xs={10}>
                <Typography
                    variant="caption"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        lineHeight: 1.2,
                        fontWeight: "bold",
                    }}
                >
                    {ellipsizeTextBox(name, 25)}
                    {featured && (
                        <FeaturedRestoIcon style={{ margin: "5px 0 0 3px" }} />
                    )}
                </Typography>
            </Grid>

            <Score score={score} viewBox="-10 -5 35 35" />
        </Grid>
    );
};
