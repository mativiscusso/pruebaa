import { FC } from "react"
import { ISvgIcon } from "interfaces/icons"
import colors from "styles/colors.module.scss";

const FilterIcon: FC<ISvgIcon> = ({ width, height, fill }) =>
(
    <svg

        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1em"}
        height={height || "1em"}
    >
        <path
            d="M6.563 2.67c-.349 0-.682.14-.929.39a1.344 1.344 0 000 1.885 1.302 1.302 0 001.857 0 1.344 1.344 0 000-1.885c-.247-.25-.58-.39-.928-.39zm-3.715 0A3.995 3.995 0 014.288.734 3.897 3.897 0 016.561 0c.815 0 1.61.257 2.276.735a3.995 3.995 0 011.439 1.934h9.41c.349 0 .682.14.929.39a1.344 1.344 0 010 1.886c-.247.25-.58.39-.928.39h-9.411a3.995 3.995 0 01-1.44 1.935 3.897 3.897 0 01-2.274.734c-.815 0-1.61-.256-2.276-.734a3.995 3.995 0 01-1.439-1.935H1.313c-.349 0-.682-.14-.929-.39a1.344 1.344 0 010-1.885c.247-.25.58-.39.929-.39h1.535zm11.59 7.997c-.349 0-.682.14-.929.39a1.344 1.344 0 000 1.886 1.303 1.303 0 001.856 0 1.344 1.344 0 000-1.886c-.246-.25-.58-.39-.928-.39zm-3.715 0a3.995 3.995 0 011.44-1.934 3.898 3.898 0 012.274-.735c.815 0 1.61.257 2.276.735a3.995 3.995 0 011.439 1.934h1.535c.349 0 .682.14.929.39a1.344 1.344 0 010 1.886c-.247.25-.58.39-.928.39h-1.536a3.995 3.995 0 01-1.44 1.934 3.897 3.897 0 01-2.274.735c-.815 0-1.61-.256-2.276-.735a3.995 3.995 0 01-1.439-1.934h-9.41c-.349 0-.682-.14-.929-.39a1.344 1.344 0 010-1.886c.247-.25.58-.39.929-.39h9.41zm-4.16 7.998c-.349 0-.682.14-.929.39a1.344 1.344 0 000 1.885 1.302 1.302 0 001.857 0 1.344 1.344 0 000-1.885c-.247-.25-.58-.39-.928-.39zm-3.715 0a3.995 3.995 0 011.44-1.935 3.898 3.898 0 012.274-.734c.815 0 1.61.256 2.276.734a3.995 3.995 0 011.439 1.935h9.41c.349 0 .682.14.929.39a1.344 1.344 0 010 1.885c-.247.25-.58.39-.928.39h-9.411a3.994 3.994 0 01-1.44 1.935A3.897 3.897 0 016.564 24c-.815 0-1.61-.257-2.276-.735a3.994 3.994 0 01-1.439-1.934H1.313c-.349 0-.682-.14-.929-.39a1.344 1.344 0 010-1.886c.247-.25.58-.39.929-.39h1.535z"
            fill={fill || colors.iconLightColor}
        />
    </svg>
)


export default FilterIcon
