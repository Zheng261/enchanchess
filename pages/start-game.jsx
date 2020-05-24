// this code has been integrated into index.jsx
import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import UserContext from '../components/UserContext';

import styles from '../components/start-game.module.css'
import io from "socket.io-client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// IMPORTANT; switch to this below endpoint when done on dev!
const GLOBAL_BACKEND_CONSTANTS = require('../styles/backend_constants.js')
const ENDPOINT = GLOBAL_BACKEND_CONSTANTS.ENDPOINT // backend server endpoint

// waiting page until server generates room link
export default function StartGame() {
  const router = useRouter()
  const [roomId, setRoomId] = useState("");
  const context = useContext(UserContext);

  useEffect(() => {
    const socket = io(ENDPOINT);

    if (context.user == "" || context.user == null) {
      router.push(`/`);
    }
    
    socket.on('dispatchRoomId', roomId => {
      setRoomId(roomId)
      router.replace(`/room/${roomId}`);
    })
    socket.emit('createRoom', context.user)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.roomLink}>
        <h1>Creating your room :)</h1>
        <FontAwesomeIcon icon={faSpinner} size="3x" pulse />
      </div>
    </div>
  )
}