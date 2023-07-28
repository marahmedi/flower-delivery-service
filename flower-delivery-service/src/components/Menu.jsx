import styles from "./Menu.module.css";
import telegram from "../assets/Telegram.svg"
import insta from "../assets/Instagram.svg"
import Pint from "../assets/Pinterest.svg"
import twitter from "../assets/Twitter.svg"
import facebook from "../assets/Facebook.svg"

// eslint-disable-next-line react/prop-types
const Menu = ({isOpen}) => {
  return (
    <div className={`${styles.container} ${isOpen ? styles.menuOpen : ''}`}>
      <div className={styles.menuLink}>Sign in </div>
      <div className={styles.menuLink}>Shop</div>
      <div className={styles.menuLink}>Service</div>
      <div className={styles.menuLink}>Contact</div>
      <div className={styles.menuLink}>About us</div>
      <div className={styles.info}>
        <ul>
          <li>Shipping & returns</li>
          <li>Terms & conditions</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className={styles.socials}>
      <img src={insta} alt="instagram icon"></img>
      <img src={Pint} alt="Pinterest icon"></img>
      <img src={facebook} alt="facebook icon"></img>
      <img src={twitter} alt="Twitter icon"></img>
      <img src={telegram} alt="telegram icon"></img>
      </div>
    </div>
  );
};

export default Menu;
