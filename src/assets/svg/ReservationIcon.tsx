import { FC } from "react"
import { SvgIcon, SvgIconProps } from "@material-ui/core";

const ReservationIcon: FC<SvgIconProps> = (props) =>
(
    <SvgIcon {...props}>
        <path
            d="M23.96 8.27l-2.207-2.206a1 1 0 00-1.35-.05 1.54 1.54 0 01-2.084-.08 1.541 1.541 0 01-.08-2.084 1 1 0 00-.05-1.35L15.98.29a.995.995 0 00-1.406 0l-3.518 3.518c-.217.218-.38.484-.478.775a.386.386 0 01-.242.242 1.99 1.99 0 00-.775.479l-9.02 9.02a.996.996 0 000 1.407l2.209 2.207a1 1 0 001.35.05 1.534 1.534 0 012.164 2.164 1 1 0 00.05 1.35l2.207 2.207a.995.995 0 001.406 0l9.02-9.02a1.99 1.99 0 00.48-.775.384.384 0 01.242-.242c.291-.098.556-.262.774-.479l3.517-3.518a.996.996 0 000-1.404zM12.54 6.789a.8.8 0 01-1.13 0l-.576-.576a.8.8 0 011.131-1.13l.576.574a.802.802 0 010 1.132zm2.201 2.2a.8.8 0 01-1.131 0l-.55-.55a.8.8 0 011.131-1.131l.55.55a.801.801 0 01.001 1.133l-.001-.002zm2.2 2.2a.8.8 0 01-1.131 0l-.55-.55a.8.8 0 011.131-1.13l.55.55a.801.801 0 01.003 1.133l-.003-.003zm2.222 2.228a.8.8 0 01-1.132 0l-.572-.575a.8.8 0 111.134-1.129l.573.575a.801.801 0 010 1.131l-.003-.002z"
        />
    </SvgIcon>

)


export default ReservationIcon