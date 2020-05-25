import React from "react";
import Link from "next/link";
import HeaderLayout from "../components/HeaderLayout";
import CardDiv from "../components/ui-elements/CardDiv";
import CardButton from "../components/ui-elements/CardButton";
import styles from "../styles/index.module.css";

export default function ImportCards() {
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
            <h2> Add New Cards! </h2>
            <div>Upload from .csv or .json:</div>
            <input type="file" id="myFile" name="filename" />
            <br />
            <div>Enter a Cardcast Code:</div>
            <input type="text" />
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
