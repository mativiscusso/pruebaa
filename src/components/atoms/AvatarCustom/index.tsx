import { makeStyles, Theme, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { IAvatar } from "interfaces/icons";
import { FC } from "react";

const useStyles = makeStyles((theme: Theme) => {
    return {
        avatar: {
            display: "flex",
            alignItems: "center",
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
            marginRight: theme.spacing(1),
        },
        textAvatar: {
            color: theme.palette.text.secondary,
        },
    };
});

export const AvatarCustom: FC<IAvatar> = ({ image, name, aditionalText }) => {
    const classes = useStyles();
    return (
        <div className={classes.avatar}>
            <Avatar alt={image} src={image} className={classes.small} />
            <Typography variant="caption" className={classes.textAvatar}>
                <strong>{name && name}</strong>
                {aditionalText && aditionalText}
            </Typography>
        </div>
    );
};
