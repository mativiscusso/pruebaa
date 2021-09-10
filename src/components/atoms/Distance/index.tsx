import { makeStyles, Theme } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { TextIcon } from "components/atoms/TextIcon";
import { IDistance } from "interfaces/icons";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    colorIcon: {
        color: (props: IDistance) =>
            props.color ? props.color : theme.palette.text.secondary,
    },
}));

export const Distance: FC<IDistance> = (props) => {
    const {
        distance,
        viewBox = "0 0 30 25",
        padding = 0,
        font = "Lato",
        textVariant = "caption",
        textWeight = 400,
    } = props;

    const classes = useStyles(props);

    return (
        <TextIcon
            icon={
                <LocationOnIcon
                    className={classes.colorIcon}
                    viewBox={viewBox}
                />
            }
            text={`${distance} km`}
            padding={padding}
            font={font}
            textVariant={textVariant}
            textWeight={textWeight}
        />
    );
};
