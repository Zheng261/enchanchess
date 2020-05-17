import { useContext } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import styles from './GamePlay.module.css'

import GameCard from './game-objects/GameCard'
import PlayGame_CardBox from './PlayGame_CardBox'
import UserContext from './UserContext';
import ChatBox from './ChatBox';

// CALLED FROM: GameLobby, which is called in turn from rooms/[id].jsx
// screen where cards/actual game can be played lives
function GamePlay(props) {
  const context = useContext(UserContext)
  return (
    <div className={styles.grid}>
    	<div className={cx(styles.item, styles.dealerContainer)}>
    		<div className={styles.header}>
    			<h2>Cards Against Humanity</h2>
    			<p>Social distancing edition</p>
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
		<div className={styles.item}>2</div>
		<div className={cx(styles.item, styles.cardContainer)}>
			<GameCard color={'white'} text={'nickelback'}/>
			<GameCard color={'white'} text={'nickelback'}/>
			<GameCard color={'white'} text={'nickelback'}/>
		</div>
		<div className={styles.item}>4</div>
    </div>
  );
}


export default GamePlay;