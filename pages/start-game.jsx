// this code has been integrated into index.jsx
import React, { useState, useContext, useEffect, useRef} from 'react'
import Link from 'next/link';

//import PageLayout from '../components/PageLayout'
import CardDiv from '../components/ui-elements/CardDiv'
import styles from '../components/start-game.module.css'

import io from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint
// IMPORTANT; switch to this below endpoint when done on dev!
const ENDPOINT = "https://bestcah-api.herokuapp.com/"

import UserContext from '../components/UserContext';

// io.connect(window.location.hostname)
export default function StartGame() {

  const [roomId, setRoomId] = useState("");
  const [buttonText, setButtonText] = useState("Copy Link")
  const [url, setUrl] = useState("")

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit('test', "testing")
    socket.emit('createRoom')
    console.log("socket emitted")
    socket.on('dispatchRoomId', roomId => {
      setRoomId(roomId)
      setUrl(`${window.location.host}/room/${roomId}`)
    })
  }, [])

  const copyUrlToClipboard = () => {
    // console.log(roomUrl)
    // roomUrl.current.select()
    // document.execCommand("copy")
    navigator.clipboard.writeText(url)
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
        <Link href={`/room/${roomId}`}>
          <a>
            {url}
          </a>
        </Link>
        <input type="hidden"  value={url}/> 
        <button 
          onMouseDown={copyUrlToClipboard} 
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
          <button className={styles.startBtn}>
            Start Game!
          </button>
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