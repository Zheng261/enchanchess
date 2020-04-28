import { useRouter } from 'next/router'
import PageLayout from '../../components/PageLayout'
//  todo: save socket.io context in app state
//  todo: manage app state in redux, next-redux-wrapper
import io from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint
import { useState, useEffect } from "react";

export default ({ data }) => {
  const router = useRouter()
  const roomId = router.query.id

  useEffect(() => {
  	console.log("room id", roomId, router.query)
    const socket = io(ENDPOINT);
    socket.emit('test', "testing")
    socket.emit('joinRoom', roomId)
  }, [])

  return (
    <PageLayout>
      <h1>Game Room</h1>
      <p>*not party owner edition* (aka i joined from a url someone sent me)</p>
      <p>room id: {router.query.id}</p>
      <h2>Other Connected Players</h2>
    </PageLayout>
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
