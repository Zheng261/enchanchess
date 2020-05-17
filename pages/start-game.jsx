// this code has been integrated into index.jsx
import React, { useState, useContext, useEffect, useRef} from 'react'
import { useRouter } from 'next/router'

//import PageLayout from '../components/PageLayout'
import CardDiv from '../components/ui-elements/CardDiv'
import StyledButton from '../components/ui-elements/StyledButton'

import styles from '../components/start-game.module.css'
import io from "socket.io-client";

// IMPORTANT; switch to this below endpoint when done on dev!
const GLOBAL_BACKEND_CONSTANTS = require('../styles/backend_constants.js')
const ENDPOINT = GLOBAL_BACKEND_CONSTANTS.ENDPOINT // backend server endpoint

// Eventually bring in username
import UserContext from '../components/UserContext';

// io.connect(window.location.hostname)
export default function StartGame() {
  const router = useRouter()
  const [roomId, setRoomId] = useState("");
  const context = useContext(UserContext);
  const [buttonText, setButtonText] = useState("Copy Link")
  const [url, setUrl] = useState("Loading...")  // the url you share with your friends
  const copyEl = useRef(null) 

  useEffect(() => {
    const socket = io(ENDPOINT);
   
    socket.emit('test', "testing")
    // Add user here
    console.log(context.user)
    socket.emit('createRoom', context.user)
    console.log("socket emitted")
    socket.on('dispatchRoomId', roomId => {
      setRoomId(roomId)
      setUrl(`${window.location.host}/room/${roomId}`)
      router.push(`/room/${roomId}`);
    })
  }, [])

  // clicking button navigates to given link
  const btnNavigate = (link) => {
    return () => {
      router.push(link)
    }
  }

  const copyUrlToClipboard = (text) => {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setButtonText("Copied!")
  }

  // todo: remove hardcode and pull from backend
  const players = ['Henry', 'Bob', 'Melinda', 'Alice']
  const playerList = players.map((name, index) => 
    <li key={index}>{name}</li>
  );


  // room url
  // need hidden input to implemented copy url to clipboard on button click
  return (
    
    <div className={styles.container}>
      <div className={styles.roomLink}>
        <h1>Invite Your Friends!</h1>
          <a>{url}</a>
        <button 
          onMouseDown={copyUrlToClipboard.bind(null, url)} 
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
          <StyledButton onClick={btnNavigate(`/room/${roomId}`)}>
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
  )
}