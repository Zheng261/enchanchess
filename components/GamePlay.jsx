import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import styles from './GamePlay.module.css'

import UserContext from './UserContext';
import ChatBox from './ChatBox';
import PlayGame_CardBox from './PlayGame_CardBox'
import BlackCard from './BlackCard'
import PlayedCardsBox from './PlayedCardsBox'
import GameSettingsModal from './ui-elements/GameSettingsModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

// CALLED FROM: GameLobby, which is called in turn from rooms/[id].jsx
// screen where cards/actual game can be played lives
export default function GamePlay(props) {
	
    // People in the room
   const [playersToPoints, setPlayersToPoints] = useState({}); 
   const [czar, setCzar] = useState(""); 
   const [visible, setVisible] = useState(false); 

   const playerPointList = Object.entries(playersToPoints).map(([key, value]) => 
    <li key = {key}>  {value} : {key} </li>
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
    			<div>
	    			<h2>Cards Against Humanity</h2>
	    			<p><code>Social distancing edition</code></p>
    			</div>
    			<div id={styles.settings} onClick={() => { setVisible(true) }}>
    				<FontAwesomeIcon icon={faCog} size="2x"/>
    			</div>
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
				<ul>	
					{playerPointList}
				</ul>
			</div>

			<div className={styles.overlayContainer}>
				<PlayGame_CardBox socket={props.socket} roomId={props.roomId} user={context.user} czar={czar} />
			</div>

			<div className={cx(styles.item, styles.rightItems, styles.chatContainer)}>
				<div className={styles.itemHeader}>
					Game Chat
				</div>
				<ChatBox roomId={props.roomId} user={context.user} socket={props.socket}></ChatBox>
			</div>

			<GameSettingsModal closeSettings={() => { setVisible(false) }} visible={visible} />

    </div>
  );
}

