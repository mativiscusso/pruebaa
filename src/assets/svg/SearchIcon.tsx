import { FC } from "react"
import { ISvgIcon } from "interfaces/icons"
import colors from "styles/colors.module.scss";

const SearchIcon: FC<ISvgIcon> = ({ width, height, fill }) =>
(
    <svg

        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
    >
        <path
            d="M17.153 15.094h-1.084l-.385-.37a8.88 8.88 0 002.155-5.805A8.92 8.92 0 008.919 0 8.92 8.92 0 000 8.92a8.92 8.92 0 008.92 8.919c2.209 0 4.24-.81 5.804-2.155l.37.385v1.084L21.955 24 24 21.955l-6.847-6.86zm-8.234 0A6.167 6.167 0 012.744 8.92 6.167 6.167 0 018.92 2.744a6.167 6.167 0 016.175 6.175 6.167 6.167 0 01-6.175 6.175z"
            fill={fill || colors.iconLightColor}
        />
    </svg>
)

export default SearchIcon
