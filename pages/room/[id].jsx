import { useRouter, Router } from 'next/router'

//  todo: save socket.io context in app state
//  todo: manage app state in redux, next-redux-wrapper
import io from "socket.io-client";

// IMPORTANT: remember to change this when deploying
const GLOBAL_BACKEND_CONSTANTS = require('../../styles/backend_constants.js')
const ENDPOINT = GLOBAL_BACKEND_CONSTANTS.ENDPOINT // backend server endpoint

import { useState, useEffect } from "react";
import GameLobby from '../../components/GameLobby'

export default ({ data }) => {
  const router = useRouter()
  const roomId = router.query.id

  // people in the room
  const [players, setPlayers] = useState([]);
  const socket = io(ENDPOINT);

  useEffect(() => {
  	console.log("room id", roomId, router.query)
    socket.emit('joinRoom', roomId)
    socket.emit('getPlayersInRoom', roomId)
  	socket.on('dispatchPlayers', res => {
  		setPlayers(res)
  		console.log(res)
  	})
  }, [])

  // useEffect(() => {
  // 	socket.emit('getPlayersInRoom', roomId)
  // 	socket.on('dispatchPlayers', players => {
  // 		setPlayers(players)
  // 	})
  // }, [players])
  function handleClick() {
    console.log("whatever");
  }

// todo: store socket instance in _app.jsx (highest parent component)
  return (
   <GameLobby roomId = {router.query.id} players = {players} socket = {socket}></GameLobby>
  )
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
