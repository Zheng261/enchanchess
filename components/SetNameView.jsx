import { useRouter } from "next/router";
import React, { useState, useContext, useEffect, useRef } from "react";
// import PageLayout from '../components/PageLayout'
import CardDiv from "./ui-elements/CardDiv";
import StyledButton from "./ui-elements/StyledButton";
import styles from "./index.module.css";
import UserContext from "./UserContext";

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx

export default function SetNameView(props) {
  const router = useRouter();
  const context = useContext(UserContext);
  const [username, setUsername] = useState("Username");
  const [msg, setMsg] = useState("");
  const changeUsername = function (event) {
    setUsername(event.target.value);
    if (event.target.value !== "") {
      setMsg("");
    }
  };

  const btnNavigate = (link) => () => {
    router.push(link);
  };

  const clickInput = function () {
    // clear input on click
    console.log("cleared input");
    setUsername("");
  };

  useEffect(() => {}, []);

  // only at beginning
  const createRoom = function (event) {
    if (username !== "" && username !== "Username") {
      context.signIn(username);
      btnNavigate("/start-game").call();
    } else {
      setMsg("Please enter your username");
      event.preventDefault();
    }
  };

  const joinRoom = function (event) {
    if (username !== "" && username !== "Username") {
      context.signIn(username);
      // Refresh
      btnNavigate(`/room/${router.query.id}`).call();
    } else {
      setMsg("Please enter your username");
      event.preventDefault();
    }
  };

  return (
    <div className={styles.centerContainer}>
      <CardDiv>
        <input
          className={styles.usernameInput}
          type="text"
          value={username}
          onChange={changeUsername}
          onClick={clickInput}
        />
        {msg !== "" && <div className={styles.errorMsg}>{msg}</div>}
        {props.createRoomAbility ? (
          <StyledButton onClick={createRoom}>Create Room</StyledButton>
        ) : (
          <StyledButton onClick={joinRoom}>Join Room</StyledButton>
        )}
      </CardDiv>
    </div>
  );
}
