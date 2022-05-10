import NavBar from "../organisms/NavBar/NavBar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => (
  <>
    <NavBar />
    <main>{children}</main>
  </>
);

export default Layout;
