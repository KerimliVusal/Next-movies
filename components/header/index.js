import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle /> Next Movies
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#">Movies</Link>
          <Link href="#">Ranked</Link>
          <Link href="#">Animation</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
