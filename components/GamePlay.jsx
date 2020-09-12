import React, { useContext, useEffect, useState } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import ChatBox from "./ChatBox";
import HandCardBox from "./game-objects/HandCardBox";
import ChessPlayArea from "./game-objects/ChessPlayArea";
import GameSettingsModal from "./ui-elements/GameSettingsModal";

import styles from "./GamePlay.module.css";

// CALLED FROM: rooms/[id].jsx
// screen where cards/actual game can be played lives
export default function GamePlay(props) {
  // People in the room
  const [playersToPoints, setPlayersToPoints] = useState({});
  const [players, setPlayers] = useState([]);
  const [czar, setCzar] = useState("");
  const [visible, setVisible] = useState(false);

  const { roomId, socket, user } = props;


  // from now on put socket.on code before socket.emit code in useEffect to avoid race conditions
  useEffect(() => {
    // Logs user in. If user already logged in, this does nothing. Adding layer of redundancy
    // In case user joins mid-game.
    console.log("Joining room with ", roomId, "and username ", user);
    socket.emit("joinRoom", { roomId, user });
  }, []);

  
  // functions for toggling settings menu
  const openSettings = () => {
    setVisible(true);
  };

  const closeSettings = () => {
    setVisible(false);
  };

  return (
    <div className={styles.grid}>
      <div className={cx(styles.item, styles.dealerContainer)}>
        <div className={styles.header}>
          <div>
            <h2>Enchanchess</h2>
          </div>
          <div id={styles.settings} onClick={openSettings}>
            <FontAwesomeIcon icon={faCog} size="2x" />
          </div>
        </div>
        
        <div>
          <ChessPlayArea socket={socket} roomId={roomId}/>
        </div>
      </div>

      <div className={cx(styles.item, styles.scoreboard, styles.rightItems)}>
        <div className={styles.itemHeader}>Scoreboard</div>
      </div>

      <div className={styles.overlayContainer}>
        <HandCardBox socket={socket} roomId={roomId} user={user} czar={czar} />
      </div>

      <div className={cx(styles.item, styles.rightItems, styles.chatContainer)}>
        <div className={styles.itemHeader}>Game Chat</div>
        <ChatBox roomId={roomId} user={user} socket={socket} />
      </div>

      <GameSettingsModal
        closeSettings={closeSettings}
        visible={visible}
        socket={socket}
        roomId={roomId}
      />
    </div>
  );
}
