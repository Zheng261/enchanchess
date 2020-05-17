import React from 'react';
import styles from './ChatBox.module.css'

// TODO: NEED TO CHANGE THIS WHEN WE DEPLOY
// import io from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint

class ChatBox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        message: '',
        messages: []
    };

    // this.socket = io(ENDPOINT);
  
    this.sendMessage = ev => {
      ev.preventDefault();
      // this.socket.emit('sendChatMessage', { //TODO: DELETE THIS 
      this.props.socket.emit('sendChatMessage', {
          author: this.props.user,
          message: this.state.message,
          roomId: this.props.roomId
      });
      this.setState({message: ''});
    }
    // this.socket.on('RECEIVE_MESSAGE', msg =>{ //TODO: DELETE THIS 
    this.props.socket.on(('RECEIVE_MESSAGE').concat(this.props.roomId), msg =>{
      console.log("MESSAGE PASSED IN", msg);
      this.setState({messages: [...this.state.messages, msg]});
      console.log("MESSAGES", this.state.messages);
      console.log("MESSAGES-1st", this.state.messages[0]);
    });
  }
  componentDidUpdate() { this._div.scrollTop = this._div.scrollHeight;}

  render(){
    return (
      <div className= {styles.gamechat} ref={(ref) => this._div = ref}>
          {this.state.messages.map(message => {
            return (
                 <playerText><div><strong>{this.props.user}:</strong> {message.message}</div></playerText>
            )
          })}

        <form onSubmit={this.sendMessage}>
          <input 
            type="text" placeholder="Enter text" 
            value={this.state.message}
            onChange={ev => this.setState({message: ev.target.value})}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    ); 
  }
}

export default ChatBox