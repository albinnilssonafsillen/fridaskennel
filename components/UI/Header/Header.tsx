import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import icon from "../../../assets/icon/dog.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.link}>
        <Link href="/">
          <Image src={icon} width={144} height={144}></Image>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/dogs">Hundarna</Link>
      </div>
      <div className={styles.link}>
        <Link href="/aboutme">Om mig</Link>
      </div>
      <div className={styles.link}>
        <Link href="/contact">Kontakt</Link>
      </div>
    </div>
  );
};

export default Header;
