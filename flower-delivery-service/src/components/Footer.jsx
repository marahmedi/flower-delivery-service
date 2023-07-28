import styles from "./Footer.module.css";
import telegram from "../assets/Telegram.svg";
import insta from "../assets/Instagram.svg";
import Pint from "../assets/Pinterest.svg";
import twitter from "../assets/Twitter.svg";
import facebook from "../assets/Facebook.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <p className={styles.reminderP}>Remember to offer beautiful flowers from Kyiv Florist Studio Valentines
        Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
        sharing your address
        </p>
        <div className={styles.emailReminder}>
          <input placeholder="Your Email" />
          <button className={styles.button}>Remind</button>
        </div>
      </div>
      <div className={styles.section}>
        <h1 className={styles.heading}>Contact Us</h1>
        <h3 className={styles.heading2}>Address</h3>
        <p className={styles.info}>15/4 Khreshchatyk Street, Kyiv</p>
        <h3 className={styles.heading2}>Phone</h3>
        <p className={styles.info}>+380980099777</p>
        <h3 className={styles.heading2}>General Enquiry:</h3>
        <p className={styles.info}>Kiev.Florist.Studio@gmail.com</p>
        <h1 className={styles.heading}>Follow Us</h1>
        <div className={styles.socials}>
          <img src={insta} alt="instagram icon"></img>
          <img src={Pint} alt="Pinterest icon"></img>
          <img src={facebook} alt="facebook icon"></img>
          <img src={twitter} alt="Twitter icon"></img>
          <img src={telegram} alt="telegram icon"></img>
        </div>
      </div>
      <div className={styles.section}>
        <h1 className={styles.heading}>Shop</h1>
        <ul>
          <li>All Products</li>
          <li>Fresh Flowers</li>
          <li>Dried Flowers</li>
          <li>Live Plants</li>
          <li>Aroma Candles</li>
          <li>Designer Vases</li>
          <li className={styles.marginBottom}>Freshener Diffuser</li>
        </ul>
        <h1 className={styles.heading}>Service</h1>
        <ul>
          <li>Flower Subscription</li>
          <li>Wedding & Event Decor</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h1 className={styles.heading}>About us</h1>
        <ul>
          <li>Our story</li>
          <li className={styles.marginBottom}>Blog</li>
          <li>Shipping & returns</li>
          <li>Terms & conditions</li>
          <li>Privacy policy Privacy policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
