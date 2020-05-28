import React from "react";
import Link from "next/link";

import styles from "../styles/index.module.css";

import HeaderLayout from "../components/ui-elements/HeaderLayout";
import CardDiv from "../components/ui-elements/CardDiv";
import CardButton from "../components/ui-elements/CardButton";

export default function About() {
  return (
    <HeaderLayout>
      <div className={styles.cardContainer}>
        <div>
          <Link href="/" prefetch>
            <CardButton text="Back" />
          </Link>
        </div>
        <div className={styles.centerContainer}>
          <CardDiv>
            <h2> Contact </h2>
            <div className={styles.text}>
              We&apos;re Team GGEZ and we&apos;re trying to help you social
              distance :)
            </div>
            <div>
              Have suggestions?
              <br />
              Email us:
              <br />
              <a href="mailto:team-ggez@abc.com"> team-ggez@abc.com </a>
            </div>
          </CardDiv>
        </div>
        <div>
          <Link href="/about">
            <CardButton text="About" />
          </Link>
        </div>
        <div>
          <Link href="/import-cards">
            <CardButton text="Add Cards" />
          </Link>
        </div>
      </div>
    </HeaderLayout>
  );
}
