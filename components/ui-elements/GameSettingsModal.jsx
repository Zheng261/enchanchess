import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import Modal from "./Modal";

import UserContext from "../UserContext";

import styles from "./GameSettingsModal.module.css";

const GameSettingsModal = (props) => {
  const router = useRouter();
  const context = useContext(UserContext);

  useEffect(
    () =>
      // cleanup, runs after component dismount
      () => {
        console.log("leaveRoom");
        props.socket.emit("leaveRoom", {
          user: context.user,
          roomId: props.roomId,
        });
      },
    []
  );

  return (
    <Modal visible={props.visible}>
      <div className={styles.container}>
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          Quit
        </button>
        <button onClick={props.closeSettings}>Close</button>
      </div>
    </Modal>
  );
};

export default GameSettingsModal;
