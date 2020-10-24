import React from "react";
import Link from "next/link";
import $ from 'jquery';

import styles from "../styles/index.module.css";

import HeaderLayout from "../components/ui-elements/HeaderLayout";
import CardDiv from "../components/ui-elements/CardDiv";
import StyledButton from "../components/ui-elements/StyledButton";
import CardButton from "../components/ui-elements/CardButton";

export default function Rules() {
  return (
    <HeaderLayout>
      <div className={styles.cardContainer}>
        <div>
          <Link href="/" prefetch>
            <CardButton text="Back" />
          </Link>
        </div>
        <div>
          <Link href="/import-cards">
            <CardButton text="Your Equipment" />
          </Link>
        </div>
        <div className={styles.centerContainer}>
          <CardDiv>
            <h2> How to Play </h2>
            <div className={styles.text}>
            It's just chess, but <b>with your own builds.</b>
            </div>
          </CardDiv>
        </div>
        <div>
          <Link href="/about">
            <CardButton text="About" />
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <CardButton text="Contact" />
          </Link>
        </div>
      </div>
    </HeaderLayout>
  );
}
