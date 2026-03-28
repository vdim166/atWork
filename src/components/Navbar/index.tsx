import styles from "./styles.module.scss";
import { LogoComponent } from "../LogoComponent";
import { RegisteredMenu } from "../RegisteredMenu";

export const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <LogoComponent />
      <RegisteredMenu />
    </nav>
  );
};
