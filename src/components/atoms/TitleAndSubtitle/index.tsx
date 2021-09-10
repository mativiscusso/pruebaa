import { Box, Typography } from "@material-ui/core";
import { ITitleAndSubtitle } from "interfaces/titles";
import { FC } from "react";

export const TitleAndSubtitle: FC<ITitleAndSubtitle> = ({
    title,
    subtitle,
    paddingY = 2,
    paddingX,
}) => {
    return (
        <Box paddingY={paddingY} paddingX={paddingX || 0}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{subtitle}</Typography>
        </Box>
    );
};
