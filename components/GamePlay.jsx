import { useContext } from 'react'
import Link from 'next/link'
import styles from './playGame.module.css'

import PlayGame_CardBox from './PlayGame_CardBox'
import UserContext from '../components/UserContext';
import ChatBox from '../components/ChatBox';

// CALLED FROM: GameLobby, which is called in turn from rooms/[id].jsx
// screen where cards/actual game can be played lives
function GamePlay(props) {
  const context = useContext(UserContext)
  return (
    <div className={styles.container}>
      <main className = {styles.main}>
        <h1 className={styles.title}>
          Cards Against Humanity
        </h1>

        <p className={styles.description}>
          Social Distancing Edition
          You are: {context.user}, Your room ID is: {props.roomId}
        </p>

		<div className={styles.rightBanner}>
			<div className = {styles.blackHeader}>
			    <p>Scoreboard</p>
			</div>
	        <div className={styles.scoreboard}>
	            <scoreboardText>1. (5) Joe</scoreboardText>
	            <scoreboardText>2. (4) Sally</scoreboardText>
	            <scoreboardText>3. (3) Jack</scoreboardText>
	            <scoreboardText>4. (2) Sarah</scoreboardText>
	            <scoreboardText>5. (1) Greg</scoreboardText>
	        </div>

	        <div className= {styles.blackHeader}>
	            <p>Game Chat</p>
	        </div>
			   <ChatBox roomId = {props.roomId} user = {context.user} socket = {props.socket}></ChatBox>
        </div>


        <div className={styles.grid}>
	        <a className={styles.blackcard}>
	          <p>Don’t worry kids, it gets better. I’ve been living with ______ for 20 years.</p>
	          <div className={styles.circle}>60</div>
	        </a>
	        <div className={styles.cardsgrid}>
              <Link href="/start-game" className={styles.a}>
                <a className={styles.card}>
                  <p>Nickelback</p>
                </a>
              </Link>

              <Link href="/start-game" className={styles.a}>
                <a className={styles.card}>
                  <p>Nickelback</p>
                </a>
              </Link>
	        </div>
	     </div>
    	<div className = {styles.dividingLine}/>
        <PlayGame_CardBox socket = {props.socket} roomId = {props.roomId} user = {context.user}></PlayGame_CardBox>
      </main>
    </div>
  );
}


export default GamePlay;