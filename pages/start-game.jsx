// this code has been integrated into index.jsx
import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link';

import PageLayout from '../components/PageLayout'
import CardDiv from '../components/ui-elements/CardDiv'
import styles from './start-game.module.css'

import io from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint
// IMPORTANT; switch to this below endpoint when done on dev!
const ENDPOINT = "https://bestcah-api.herokuapp.com/"
import UserContext from '../components/UserContext';

// io.connect(window.location.hostname)
export default function StartGame() {

  const [roomId, setRoomId] = useState("");
  const [host, setHost] = useState("")

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit('test', "testing")
    socket.emit('createRoom')
    console.log("socket emitted")
    socket.on('dispatchRoomId', roomId => {
      setRoomId(roomId)
    })

    setHost(window.location.host)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.partyLink}>
        Invite Your Friends!
        <Link href={`/room/${roomId}`}>
          <a className="card">
            {`${host}/room/${roomId}`}
          </a>
        </Link>
      </div>
      <div className={styles.cardContainer}>
        <CardDiv>
          Game Settings
        </CardDiv>
        <CardDiv>
          Card Decks
        </CardDiv>
        <CardDiv>
          Players
        </CardDiv>
      </div>
    </div>
  )
}