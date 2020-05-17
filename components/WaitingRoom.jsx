
import cx from 'classnames'
import React, { useState, useContext, useEffect, useRef} from 'react'
//import PageLayout from '../components/PageLayout'
import CardDiv from './ui-elements/CardDiv'
import StyledButton from './ui-elements/StyledButton'
import styles from './start-game.module.css'
import { useRouter } from 'next/router'
import io from "socket.io-client";

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx

export default function WaitingRoom(props) {
    
    const router = useRouter()
    const startingPlayers = ['Henry', 'Bob', 'Melinda', 'Alice']
    const [players, setPlayers] = useState([startingPlayers])
    const [playerList, setPlayerList] = useState(startingPlayers.map((name, index) => 
    <li key={index}>{name}</li>))
    const [buttonText, setButtonText] = useState("Copy Link")
    const [url, setUrl] = useState("Loading...")  // the url you share with your friends

    const startGame = () => {
        console.log("Starting Game!")
        props.socket.emit('startGame', props.roomId)
    }

    useEffect(() => {
        setUrl(`${window.location.host}/room/${props.roomId}`)
    }, [])

    const copyUrlToClipboard = (text) =>  {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        setButtonText("Copied!")
    }

    const btnNavigate = (link) => {
        return () => {
            router.push(link)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.roomLink}>
            <h1>Invite Your Friends!</h1>
                <a>{url}</a>
            <button 
                onMouseDown={copyUrlToClipboard.bind(null, `${url}`)} 
                onMouseUp={() => {setButtonText("Copy Link")}}
            >
                {buttonText}          
            </button> 
            </div>
            <div className={styles.cardContainer}>
            <CardDiv heading={'Game Settings'}>
                <div className={styles.gameSettings}>
                Score Limit
                </div>
                <div className={styles.gameSettings}>
                Player Limit
                </div>
                <div className={styles.gameSettings}>
                Idle Limit
                </div>
                <StyledButton onClick={startGame}>
                    Start Game!
                </StyledButton>
                <StyledButton onClick={btnNavigate(`/`)}>
                    Quit
                </StyledButton>
            </CardDiv>
            <CardDiv heading={'Card Decks'}>
            </CardDiv>
            <CardDiv heading={'Players'}>
                <ul className={styles.playerList}>
                {playerList}
                </ul>
            </CardDiv>
            </div>
        </div>
    );
}