import Layout from '../components/PageLayout'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8000";
import { useEffect } from "react";

export default function StartGame() {
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit('test', "testing")
    socket.emit('createRoom')
    console.log("socket emitted")
  }, [])

  return (
    <Layout>
      <h1>Start Game</h1>
      <p>
        Start a game now! Have your friends join you here [link]
      </p>
    </Layout>
  )
}