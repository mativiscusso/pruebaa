import { makeStyles, Theme, Typography } from "@material-ui/core";
import { ITextIcon } from "interfaces/icons";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        padding: (props: ITextIcon) => props.padding,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    typography: {
        fontFamily: (props: ITextIcon) =>
            props.font === "Lato"
                ? theme.typography.subtitle1.fontFamily
                : theme.typography.body1.fontFamily,
        textTransform: "capitalize",
        fontWeight: (props: ITextIcon) => props.textWeight,
    },
}));

export const TextIcon: FC<ITextIcon> = (props) => {
    const { icon, text, color, textVariant } = props;
    const classes = useStyles(props);

    return (
        <span className={classes.item}>
            {icon}
            <Typography
                variant={textVariant}
                color={color}
                className={classes.typography}
            >
                {text}
            </Typography>
        </span>
    );
};
