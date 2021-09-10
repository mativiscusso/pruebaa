import { Container } from "@material-ui/core";
import { Bottombar } from "components/organisms/Bottombar";
import { Navbar } from "components/organisms/Navbar";
import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <Container maxWidth="sm">
            <Navbar />
            <main style={{ paddingBottom: 64 }}>{children}</main>
            <Bottombar />
        </Container>
    );
};

export default Layout;
