import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";

import UserContext from "../../config/UserContext";

import Modal from "./Modal";

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
          type="button"
          onClick={() => {
            router.push("/");
          }}
        >
          Quit
        </button>
        <button type="button" onClick={props.closeSettings}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default GameSettingsModal;
