// this code has been integrated into index.jsx

import PageLayout from '../components/PageLayout'
import io from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint
// IMPORTANT; switch to this below endpoint when done on dev!
const ENDPOINT = "https://bestcah-api.herokuapp.com/"
import { useState, useEffect } from "react";
import GameStarter from "../components/GameStarter";
import UserContext from '../components/UserContext';

// io.connect(window.location.hostname)
export default function StartGame() {

  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit('test', "testing")
    socket.emit('createRoom')
    console.log("socket emitted")
    socket.on('dispatchRoomId', roomId => {
      setRoomId(roomId)
    })
  }, [])

  return (
    <GameStarter roomId = {roomId}> </GameStarter>
  )
}