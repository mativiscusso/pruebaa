import { Grid, makeStyles, Theme } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
import ClockIcon from "@material-ui/icons/QueryBuilder";
import { TextIcon } from "components/atoms/TextIcon";
import { FC } from "react";

interface IProps {
    hour: string | number;
    price: string | number;
}

const useStyles = makeStyles((theme: Theme) => ({
    colorIcon: {
        color: theme.palette.text.secondary,
    },
}));

export const IconsSection: FC<IProps> = ({ price, hour }) => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="space-between">
            <Grid item xs={6}>
                <TextIcon
                    icon={
                        <ClockIcon
                            className={classes.colorIcon}
                            viewBox="0 0 30 25"
                        />
                    }
                    text={hour}
                    padding={0}
                    font="Lato"
                    color="textSecondary"
                    textVariant="caption"
                    textWeight={400}
                />
            </Grid>
            <Grid item xs={6}>
                <TextIcon
                    icon={
                        <PaymentIcon
                            className={classes.colorIcon}
                            viewBox="0 0 30 25"
                        />
                    }
                    text={price}
                    padding={0}
                    font="Lato"
                    color="textSecondary"
                    textVariant="caption"
                    textWeight={400}
                />
            </Grid>
        </Grid>
    );
};
