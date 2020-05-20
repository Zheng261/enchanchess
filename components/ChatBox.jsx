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
				userMessages: [],
				gameMessages: []
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
    this.props.socket.on(('RECEIVE_MESSAGE').concat(this.props.roomId), (data) =>{
			console.log("DATA", data);
			console.log("MESSAGE PASSED IN", data.message);
			console.log("isuserupdate", data.isUserUpdate);
			if (data.isUserUpdate){
				this.setState({userMessages: [...this.state.userMessages, data.message]});
			} else{
				this.setState({gameMessages: [...this.state.gameMessages, data.message]});
			}
			console.log("USERMESSAGES", this.state.userMessages);
			console.log("GAMEMESSAGES", this.state.gameMessages);
    });
  }
  // componentDidUpdate() { 
	// 	this._div.scrollTop = this._div.scrollHeight;
	// }

  render(){
    return (
      <div className= {styles.gamechat} ref={(ref) => this._div = ref}>
          {this.state.userMessages.map(message => {
            return (
                 <playerText><div><strong>{message.author}:</strong> {message.message}</div></playerText>
            )
          })}
					{this.state.gameMessages.map(message => {
            return (
                 <cardWinText><div>{message.message}</div></cardWinText>
            )
          })}
      {/* </div> */}
			{/* <div className = {styles.formInput}> */}
				<form className = {styles.formInput} onSubmit={this.sendMessage}>
          <input 
            type="text" placeholder="Enter message" 
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