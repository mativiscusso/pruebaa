import { SvgIcon, SvgIconProps } from "@material-ui/core";
import { FC } from "react";

const MapIcon: FC<SvgIconProps> = (props) => (
    <SvgIcon {...props}>
        <path
            d="M9 0C6.82531 0 5.0625 1.98316 5.0625 4.42969C5.0625 6.40758 7.63594 10.0125 8.62187 11.321C8.82156 11.5861 9.17875 11.5861 9.37813 11.321C10.3641 10.0125 12.9375 6.40758 12.9375 4.42969C12.9375 1.98316 11.1747 0 9 0ZM9 5.90625C8.275 5.90625 7.6875 5.24531 7.6875 4.42969C7.6875 3.61406 8.275 2.95312 9 2.95312C9.725 2.95312 10.3125 3.61406 10.3125 4.42969C10.3125 5.24531 9.725 5.90625 9 5.90625ZM0.62875 7.59199C0.443181 7.67549 0.284103 7.81962 0.172034 8.00579C0.0599652 8.19197 4.4444e-05 8.41164 0 8.63648L0 17.4368C0 17.8348 0.357188 18.1069 0.685625 17.9592L5 15.75V7.55578C4.72375 6.99398 4.49781 6.44695 4.33594 5.92383L0.62875 7.59199ZM9 12.6446C8.56031 12.6446 8.14437 12.4274 7.85906 12.0484C7.24469 11.2328 6.59125 10.3039 6 9.35121V15.7496L12 17.9996V9.35156C11.4087 10.3039 10.7556 11.2331 10.1409 12.0487C9.85563 12.4274 9.43969 12.6446 9 12.6446ZM17.3144 5.66578L13 7.875V18L17.3713 16.033C17.5568 15.9495 17.7159 15.8054 17.828 15.6192C17.9401 15.4331 18 15.2134 18 14.9885V6.1882C18 5.79023 17.6428 5.51813 17.3144 5.66578Z"
            fill={props.fill || "#fff"}
        />
    </SvgIcon>
);

export default MapIcon;
