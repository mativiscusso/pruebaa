import { Typography } from "@material-ui/core";
import { IPriceRange } from "interfaces/icons";
import { FC } from "react";

export const PriceRange: FC<IPriceRange> = ({
    priceRange,
    textVariant = "body2",
    textColor = "textSecondary",
}) => {
    return (
        <Typography variant={textVariant} color={textColor}>
            {priceRange}
        </Typography>
    );
};
