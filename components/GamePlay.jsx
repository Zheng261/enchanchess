import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import styles from './GamePlay.module.css'

import UserContext from './UserContext';
import ChatBox from './ChatBox';
import PlayGame_CardBox from './PlayGame_CardBox'
import BlackCard from './BlackCard'
import PlayedCardsBox from './PlayedCardsBox'

// CALLED FROM: GameLobby, which is called in turn from rooms/[id].jsx
// screen where cards/actual game can be played lives
export default function GamePlay(props) {
	
    // People in the room
   const [playersToPoints, setPlayersToPoints] = useState({}); 
   const [czar, setCzar] = useState(""); 
   const playerPointList = Object.entries(playersToPoints).map(([key, value]) => 
    <li> {key} : {value} </li>
   );

	// Get ready for player list to update
	props.socket.on('dispatchPlayerPoints', res => {
		setPlayersToPoints(res)
		console.log("Players and points ", playersToPoints)
	})

	// Get ready for player list to update
	props.socket.on('getCardCzarReply', res => {
		setCzar(res)
		console.log("Current card czar: ", czar)
	})

	useEffect(() => {
		// Logs user in. If user already logged in, this does nothing. Adding layer of redundancy
		// In case user joins mid-game. 
		console.log("Joining room with ", props.roomId, "and username ", props.user)
		props.socket.emit('joinRoom', {roomId: props.roomId, user: props.user})

		// Figure out who current czar is 
		props.socket.emit('getCardCzar', props.roomId)
	}, [])

  const context = useContext(UserContext)


  return (
    <div className={styles.grid}>
    	<div className={cx(styles.item, styles.dealerContainer)}>
    		<div className={styles.header}>
    			<h2>Cards Against Humanity</h2>
    			<p><code>Social distancing edition</code></p>
    		</div>
    		<div className={styles.dealerCardContainer}>
    			<BlackCard socket={props.socket} roomId={props.roomId}/>
    			<PlayedCardsBox socket = {props.socket} roomId ={props.roomId} user={context.user} czar={czar}/>
    		</div>
    	</div>
		<div className={cx(styles.item, styles.scoreboard, styles.rightItems)}>
			<div className={styles.itemHeader}>
				Scoreboard
				
			</div>
			<center>Czar: {czar} </center>
			<ol>	
				{playerPointList}
			</ol>
		</div>
		<div className={styles.overlayContainer}>
			<PlayGame_CardBox socket={props.socket} roomId={props.roomId} user={context.user} czar={czar}></PlayGame_CardBox>
		</div>
		<div className={cx(styles.item, styles.rightItems)}>
			<div className={styles.itemHeader}>
				Game Chat
			</div>
			<ChatBox roomId={props.roomId} user={context.user} socket={props.socket}></ChatBox>
		</div>
    </div>
  );
}

