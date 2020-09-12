import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
// import PageLayout from '../components/PageLayout'
import CardDiv from "./ui-elements/CardDiv";
import StyledButton from "./ui-elements/StyledButton";
import styles from "./SetNameView.module.css";
import UserContext from "../config/UserContext";

// called from pages/room/[id].jsx and index.jsx
export default function SetNameView(props) {
  const router = useRouter();
  const context = useContext(UserContext);
  const [username, setUsername] = useState("Username");
  const [msg, setMsg] = useState("");

  // props destructuring
  const { createRoomAbility, roomId, socket, errorMessage } = props;

  const changeUsername = (event) => {
    setUsername(event.target.value);
    if (event.target.value !== "") {
      setMsg("");
    }
  };

  const btnNavigate = (link) => () => {
    router.push(link);
  };

  const clickInput = () => {
    // clear input on click
    console.log("cleared input");
    setUsername("");
  };

  // only at beginning
  const createRoom = (event) => {
    if (username !== "" && username !== "Username") {
      context.signIn(username);
      btnNavigate("/start-game").call();
    } else {
      setMsg("Please enter your username");
      event.preventDefault();
    }
  };

  const joinRoom = (event) => {
    if (username !== "" && username !== "Username") {
      context.signIn(username);
      // Refresh
      socket.emit("joinRoom", { roomId: roomId, user: username});
      btnNavigate(`/room/${router.query.id}`).call();
    } else {
      setMsg("Please enter your username");
      event.preventDefault();
    }
  };

  return (
    <div className={styles.centerContainer}>
      {errorMessage}
      <CardDiv>
        <input
          className={styles.usernameInput}
          type="text"
          value={username}
          onChange={changeUsername}
          onClick={clickInput}
        />
        {msg !== "" && <div className={styles.errorMsg}>{msg}</div>}
        {createRoomAbility ? (
          <StyledButton onClick={createRoom}>Create Game</StyledButton>
        ) : (
          <StyledButton onClick={joinRoom}>Join Game</StyledButton>
        )}
      </CardDiv>
    </div>
  );
}
