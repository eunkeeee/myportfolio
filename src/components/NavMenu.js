import styles from "./NavMenu.module.css";

const NavMenu = ({ background, href, text }) => {
  const transparentWhite = "hsla(0, 0%, 100%, 0.7)";
  const backgroundMenuColor = "#334A52";
  return (
    <div>
      <a
        className={styles.menu}
        style={{
          color: `${background ? backgroundMenuColor : transparentWhite}`,
        }}
        href={href}
      >
        {text}
      </a>
    </div>
  );
};

export default NavMenu;
