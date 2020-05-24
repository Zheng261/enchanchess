import { useRouter, Router } from 'next/router'
import { useContext } from 'react'
import UserContext from '../../components/UserContext';

import styles from '../../components/roomid.module.css'

import { useState, useEffect } from "react";

import GamePlay from '../../components/GamePlay'
import WaitingRoom from '../../components/WaitingRoom'
import SetNameView from '../../components/SetNameView'

export default ({ data }) => {
  const router = useRouter()
  const roomId = router.query.id

  const context = useContext(UserContext)
  
  // Has game started yet?
  const [gameStarted, setGameStarted] = useState(false)

  const socket = context.socket;

  // Check whether game has started
  socket.on('gameStarted', res => {
    console.log("Game Start Signal Receiver Triggered")
    if (res) {
      console.log("Game Start Signal Received: Starting Game Now")
      setGameStarted(res)
    }
  })

  console.log("Checking if game started yet")
  
  useEffect(() => {
    console.log("Entering room id:", router.query)
    // Now that socket for checking whether game started is on, we check once manually
    // This breaks sometimes for no discernible reason.
      // Check whether game has started
    socket.emit('checkStartGame', roomId)
  }, [])

// todo: store socket instance in _app.jsx (highest parent component)
  // If does not have username, make them set one and let them join the room
    if (context.user == null || context.user == "") {
      return (
        <div className={styles.container}>
          <div className={styles.roomLink}>
            <SetNameView createRoomAbility = {false}></SetNameView>
        </div>
       </div>
      )
    // Game has started
    } else if (gameStarted) {
      return (
        <GamePlay roomId = {router.query.id} socket = {socket} user = {context.user}/>
        // <GameLobby roomId = {router.query.id} players = {players} socket = {socket}></GameLobby>
      );
    // Game has not started
    } else {
      return (
        <WaitingRoom roomId = {router.query.id} socket = {socket} user = {context.user}/>
      );
    }
}

// This gets called on every request
// we just need to trick next.js into thinking this page cannot be statically optimzied
// otherwise we run into this bug
// https://github.com/zeit/next.js/issues/10521
export async function getServerSideProps() {
  // // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const data = "test"

  // Pass data to the page via props
  return { props: { data } }
}
