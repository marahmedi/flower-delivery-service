import styles from "./Header.module.css";
import hamburger from "../assets/Vector.png";
import bag from "../assets/bag.png";
import Menu from "./Menu";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left} onClick={showMenu}>
          <div className={styles.Link}>
            <img src={hamburger} alt="Hamburger menu icon"></img>
          </div>
          <div className={styles.webLink}>Shop</div>
          <div className={styles.webLink}>Contact</div>
        </div>
        <div className={styles.right}>
          <div className={styles.Link}>
            <img src={bag} alt="bag icon" />
          </div>
          <div className={styles.webLink}>Sign in</div>
          <div className={styles.webLink}>Cart</div>
        </div>
      </div>
      {isOpen && (
        <Menu className={isOpen ? styles.slideOut: styles.slideIn}/>
      )}
    </>
  );
};
export default Header;
