import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise inc
      </p>
    </div>
  );
}

export default Footer;
