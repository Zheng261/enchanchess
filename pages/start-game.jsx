import PageLayout from '../components/PageLayout'
import io from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint
const ENDPOINT = "https://bestcah-api.herokuapp.com/"
import { useState, useEffect } from "react";

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
    <PageLayout>
      <h1>Start Game</h1>
      <p>
        Start a game now! Have your friends join you here 
      </p>
      <p>
        http://localhost:3000/room/{roomId}
      </p>
    </PageLayout>
  )
}