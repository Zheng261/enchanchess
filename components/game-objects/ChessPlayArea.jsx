import React, { useState, useEffect } from "react";
import ChessBoard from "./ChessBoard";

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx

export default function ChessPlayArea(props) {
 

  useEffect(() => {
  }, []);

  return <div>
      <ChessBoard/>
    </div>;
}
