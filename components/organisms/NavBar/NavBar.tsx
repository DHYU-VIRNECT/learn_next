import { NavBarTabType } from "./types";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavBar = () => {
  return (
    <nav className={cx("nav-bar")}>
      <NavBar.Tab text="home" to="/" />
      <NavBar.Tab text="cameras" to="/camera" />
    </nav>
  );
};

const NavBarTab = ({ text, to }: NavBarTabType) => (
  <Link href={to}>
    <a>
      <div className={cx("tab")}>
        <span>{text}</span>
      </div>
    </a>
  </Link>
);

NavBar.Tab = NavBarTab;

export default NavBar;
