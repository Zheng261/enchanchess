import React from "react"
import Chess from "chess.js"
import ChessBoard from "./chessboardjsx/src/Demo.js"
import { Col, Modal } from "antd"

class ChessBoardUI extends React.Component {
  chess = new Chess()

  state = {
    selectVisible: false,
    fen: "",
    lastMove: null
  }

  render() {
  
    return (
      <div style={{ background: "#2b313c", height: "100vh" }}>
       <ChessBoard/>
      </div>
    )
  }
}

export default ChessBoardUI;
