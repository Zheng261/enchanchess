import PageLayout from '../components/PageLayout'
import io from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint
const ENDPOINT = "https://bestcah-api.herokuapp.com/"
import { useState, useEffect } from "react";

// io.connect(window.location.hostname)
export default function StartGame() {

  const [roomId, setRoomId] = useState("");
  const [hostname, setHostname] = useState("")

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.emit('test', "testing")
    socket.emit('createRoom')
    console.log("socket emitted")
    socket.on('dispatchRoomId', roomId => {
      setRoomId(roomId)
    })

    setHostname(window.location.hostname)
  }, [])

  return (
    <PageLayout>
      <h1>Start Game</h1>
      <p>
        Start a game now! Have your friends join you here 
      </p>
      <p>
        {hostname}/room/{roomId}
      </p>
    </PageLayout>
  )
}