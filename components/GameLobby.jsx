import React from 'react';

import PageLayout from '../components/PageLayout'
import UserContext from '../components/UserContext';
import ChatBox from '../components/ChatBox';
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
    this.setState({ play_game: true })
  }

  // when play button is pressed, the play game screen should be shown instead of the lobby
  render() {
    let value = this.context.user
    let screen;
    if (this.state.play_game) {
      screen = <GamePlay />
    } else {
      screen =  
        <React.Fragment>
          <h1>Game Room</h1>
          <div>Welcome, {this.context.user} </div>
          <p>*not party owner edition, will distinguish some other time*</p>
          <p>room id: {this.props.roomId}</p>
          <h2># of Connected Players</h2>
          <p>{this.props.players.length}</p>
          <button onClick = {this.handleClick}>Test</button>
          <button onClick = {this.playGame}>Play!</button>
          <ChatBox roomId = {this.props.roomId} user = {this.context.user}></ChatBox>
        </React.Fragment>
    }
    return (
      <PageLayout>
        {screen}
      </PageLayout>
    )
  }
}

export default GameLobby
