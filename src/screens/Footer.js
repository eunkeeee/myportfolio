import { useState } from "react";
import styles from "./Footer.module.css";
import Icon from "../components/Icon";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const copyMailAddress = () => {
    setCopied(true);
    const tempElem = document.createElement("textarea");
    tempElem.value = "eunkeee@yonsei.ac.kr";
    document.body.appendChild(tempElem);

    tempElem.select();
    document.body.removeChild(tempElem);
    alert("Copied e-mail address to clipboard!");
  };
  const backToGmail = () => {
    setCopied(false);
  };
  return (
    <div className={styles.Footer}>
      <div className={styles.icons}>
        <Icon
          text="Github Link"
          url="https://github.com/eunkeeee"
          imgSrc={<i class="fa-brands fa-github"></i>}
        />
        <Icon
          imgSrc={<i class="fa-solid fa-at"></i>}
          onClick={copyMailAddress}
          onMouseLeave={backToGmail}
        />
        <Icon
          imgSrc={<i class="fa-brands fa-instagram"></i>}
          url="https://instagram.com/eunkeeee?igshid=YmMyMTA2M2Y="
        />
      </div>
      <div className={styles.copyright}>
        copyright &copy; 2022. Cho Eunki. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
