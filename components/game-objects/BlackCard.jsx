import React, { useState, useEffect } from "react";
import { Html5Entities } from "html-entities";
import GameCard from "./GameCard";

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx

export default function BlackCard(props) {
  const [blackCardText, setBlackCardText] = useState("");

  useEffect(() => {
    const htmlEntities = new Html5Entities();
    // Update black card
    props.socket.on("drawBlackCardReply", (res) => {
      console.log("black card drawn: ".concat(res.text));
      let newText = htmlEntities.decode(res.text.replace(/_/g, "_____"));
      newText = newText.replace(/<br>/g, "\n");
      setBlackCardText(newText);
    });
  }, []);

  return <GameCard color="black" text={blackCardText} />;
}
