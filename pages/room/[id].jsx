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

  // Has game started yet?
  const [gameStarted, setGameStarted] = useState(false);

  const { user, socket } = context;

  useEffect(() => {
    console.log("Entering room id:", router.query);
    // Now that socket for checking whether game started is on, we check once manually
    // This breaks sometimes for no discernible reason.
    // Check whether game has started
    socket.on("gameStarted", (res) => {
      console.log("Game Start Signal Receiver Triggered");
      if (res) {
        console.log("Game Start Signal Received: Starting Game Now", context);
        setGameStarted(res);
      }
    });

    socket.emit("checkStartGame", roomId);
    console.log("Checking if game started yet");
  }, []);

  // If does not have username, make them set one and let them join the room

  if (user === null || user === "") {
    console.log("new user");
    return (
      <div className={styles.container}>
        <div className={styles.roomLink}>
          <SetNameView createRoomAbility={false} />
        </div>
      </div>
    );

    // Game has started
  }
  if (gameStarted) {
    // rejoin room
    console.log("rejoining as", user);
    socket.emit("rejoinRoom", { roomId, user });
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
