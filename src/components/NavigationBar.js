import styles from "./NavigationBar.module.css";
const NavigationBar = ({ background }) => {
  return (
    <div className={styles.menus}>
      {/* Navigation Bar */}
      <div>
        <a
          className={styles.menu}
          style={{
            color: `${background ? "black" : "hsla(0, 0%, 100%, 0.7)"}`,
          }}
          href="#AboutMe"
        >
          About Me
        </a>
      </div>
      <div>
        <a
          className={styles.menu}
          style={{
            color: `${background ? "black" : "hsla(0, 0%, 100%, 0.7)"}`,
          }}
          href="#Skills"
        >
          Skills
        </a>
      </div>
      <div>
        <a
          className={styles.menu}
          style={{
            color: `${background ? "black" : "hsla(0, 0%, 100%, 0.7)"}`,
          }}
          href="#Archiving"
        >
          Archiving
        </a>
      </div>
      <div>
        <a
          className={styles.menu}
          style={{
            color: `${background ? "black" : "hsla(0, 0%, 100%, 0.7)"}`,
          }}
          href="#Projects"
        >
          Projects
        </a>
      </div>
    </div>
  );
};
export default NavigationBar;
