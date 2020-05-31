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
            <h2> How to Play </h2>
            <div className={styles.text}>
            <b>To start a game</b>, pick a username and create a game room. Once you've created a room, you will receive a <b>room link</b> that you can share with your friends! 
            <br />
            Once in-game, one player will be designated as the <b>Card Czar</b>. The other players must pick cards to fill the <b>black card</b> in the most humorous way. Once all players have played their card(s), the Card Czar will select the <b>funniest play</b>.
            The game ends once a player has reached the <b>score limit</b> or the group has hit the <b>round limit</b>.
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
