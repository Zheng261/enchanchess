import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserContext from "../../config/UserContext";

import styles from "../../styles/room-id.module.css";

import GamePlay from "../../components/GamePlay";
import WaitingRoom from "../../components/WaitingRoom";
import SetNameView from "../../components/SetNameView";

export default ({ data }) => {
  const router = useRouter();
  const roomId = router.query.id;
  const context = useContext(UserContext);

  const NO_ERRORS = "";

  // Has game started yet?
  const [userInRoom, setUserInRoom] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(NO_ERRORS);

  const { user, socket } = context;

  socket.on("gameStarted", (res) => {
    console.log("Game Start Signal Receiver Triggered");
    if (res) {
      console.log("Game Start Signal Received: Starting Game Now", context);
      setGameStarted(res);
    }
  });

  useEffect(() => {
    if (user !== null) {
        console.log("user trying to join room now")
        socket.on("joinRoom", (res) => {
          console.log("user is ", user);
          if (res.user === user) {
            if (res.errorMessage === "") {
              socket.emit("checkIsPlayerInRoom", {roomId: roomId, user: user})
              socket.emit("checkStartGame", roomId);
            } else {
              setErrorMessage(res.errorMessage);
            }
          }
        });
      socket.on("checkIsPlayerInRoom", (res) => {
        if (res.user === user) {
          console.log("Curr player is indeed in the room");
          setUserInRoom(true);
        }
      });
      socket.emit("joinRoom", {user: user, roomId: roomId});
    }
  }, [user]);

  // If does not have username, make them set one and let them join the room
  if (user === null || !userInRoom) {
    return (
      <div className={styles.container}>
        <div className={styles.roomLink}>
          <SetNameView createRoomAbility={false} roomId={router.query.id} socket={socket} errorMessage={errorMessage}/>
        </div>
      </div>
    );
    // Game has started
  }
  if (gameStarted) {
    // rejoin room
    console.log("rejoining as", user);
    socket.emit("joinRoom", { roomId: roomId, user: user});
    return <GamePlay roomId={router.query.id} socket={socket} user={user} />;
  }
  // Game has not started
  return <WaitingRoom roomId={router.query.id} socket={socket} user={user} />;
};

// This gets called on every request
// we just need to trick next.js into thinking this page cannot be statically optimzied
// otherwise we run into this bug
// https://github.com/zeit/next.js/issues/10521
export async function getServerSideProps() {
  // // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const data = "test";
  // Pass data to the page via props
  return { props: { data } };
}
