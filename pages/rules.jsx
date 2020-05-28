import React from "react";
import Link from "next/link";

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
            <CardButton text="Add Cards" />
          </Link>
        </div>
        <div className={styles.centerContainer}>
          <CardDiv>
            <h2> Rules </h2>
            <div className={styles.text}>
            Rules can be found{" "}
              <a
                href="http://s3.amazonaws.com/cah/CAH_Rules.pdf"
                target="_blank"
              >
                here.
              </a>
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
