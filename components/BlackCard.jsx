import React, { useState, useContext, useEffect } from 'react';
import { Html5Entities } from 'html-entities';
import styles from './GamePlay.module.css';
import GameCard from './game-objects/GameCard';

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx


export default function BlackCard(props) {
  const [blackCardText, setBlackCardText] = useState('');
  const [blackCardPick, setBlackCardPick] = useState(0);

  useEffect(() => {
    const htmlEntities = new Html5Entities();
    // Update black card
    props.socket.on('drawBlackCardReply', (res) => {
      console.log(('black card drawn: ').concat(res.text));
      let newText = htmlEntities.decode(res.text.replace(/_/g, '_____'));
      newText = newText.replace(/<br>/g, '\n');
      setBlackCardText(newText);
      setBlackCardPick(res.pick);
    });
  }, []);

  return (
    <GameCard
      color="black"
      text={blackCardText}
    />
  );
}

// This gets called on every request
// we just need to trick next.js into thinking this page cannot be statically optimzied
// otherwise we run into this bug
// https://github.com/zeit/next.js/issues/10521
export async function getServerSideProps() {
  // // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const data = 'test';

  // Pass data to the page via props
  return { props: { data } };
}
