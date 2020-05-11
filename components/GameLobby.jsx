import React from 'react';
import Link from 'next/link'

import HeaderLayout from '../components/HeaderLayout'
import UserContext from '../components/UserContext';
import GamePlay from './GamePlay';

class GameLobby extends React.Component {
  static contextType = UserContext

  constructor(props) {
    super(props);
    this.state = { 
      user: "",
      play_game: false, 
    }
    this.setMessage = this.setMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playGame = this.playGame.bind(this);
  };

  setMessage = function(str) {
    console.log("this state user is ", this.state.user)
    return( <div>Hello, {this.state.user} </div> )
  };

  handleClick = function() {
    const contextUser = this.context;
    console.log(contextUser.user)
    console.log("hello")
  }

  playGame = function() {
    this.props.socket.emit('startGame', this.props.roomId)
    this.setState({ play_game: true })
  }

  // when play button is pressed, the play game screen should be shown instead of the lobby
  // for all people connected to the same lobby the game should start when party leader presses play
  render() {
    this.props.socket.on('gameStarted', res => {
      console.log("game started by leader")
      this.setState({ play_game: true })
    })

    let value = this.context.user
    let screen;
    if (this.state.play_game) {
      screen = <GamePlay roomId = {this.props.roomId}/>
    } else {
      screen =  
      <HeaderLayout>
          <React.Fragment>
            <h1>Game Room</h1>
            <div>Welcome, {this.context.user} </div>
            <p>*not party owner edition, will distinguish some other time*</p>
            <p>room id: {this.props.roomId}</p>
            <h2># of Connected Players</h2>
            <p>{this.props.players.length}</p>
            <button onClick = {this.playGame}>Play! </button>
          </React.Fragment>
        </HeaderLayout>
    }
    return (
      <div>
        {screen}
     </div>
    )
  }
}

export default GameLobby
