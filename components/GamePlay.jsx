import { useContext } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import styles from './GamePlay.module.css'

import GameCard from './game-objects/GameCard'
import UserContext from './UserContext';
import ChatBox from './ChatBox';
import PlayGame_CardBox from './PlayGame_CardBox'
import CzarView from './CzarView'

// CALLED FROM: GameLobby, which is called in turn from rooms/[id].jsx
// screen where cards/actual game can be played lives
export default function GamePlay(props) {
  const context = useContext(UserContext)
  return (
    <div className={styles.grid}>
    	<div className={cx(styles.item, styles.dealerContainer)}>
    		<div className={styles.header}>
    			<h2>Cards Against Humanity</h2>
    			<p><code>Social distancing edition</code></p>
    		</div>
    		<div className={styles.dealerCardContainer}>
    			<GameCard color={'black'} text={'Don\'t worry kids it gets better, ive been living with ____ for 20 years now'}/>
    			<div className={styles.whiteCards}>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    				<GameCard color={'white'} text={'nickelback'}/>
    			</div>
    		</div>
    	</div>
		<div className={cx(styles.item, styles.scoreboard, styles.rightItems)}>
			<div className={styles.itemHeader}>
				Scoreboard
			</div>
			<ol>	
				<li>5- John</li>
				<li>4- Sally</li>
				<li>4- Jack</li>
				<li>2- Mary</li>
				<li>1- Sam</li>
			</ol>
		</div>
		<div className={styles.overlayContainer}>
		<PlayGame_CardBox socket = {props.socket} roomId = {props.roomId} user = {context.user}></PlayGame_CardBox>
		<CzarView />
		</div>
		<div className={cx(styles.item, styles.rightItems)}>
			<div className={styles.itemHeader}>
				Game Chat
			</div>
			<ChatBox roomId = {props.roomId} user = {context.user} socket = {props.socket}></ChatBox>
		</div>
    </div>
  );
}

