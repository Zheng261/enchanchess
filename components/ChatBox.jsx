import React from 'react';
import styles from './playGame.module.css'
// TODO: NEED TO CHANGE THIS WHEN WE DEPLOY
import io from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8000"; // backend server endpoint

class ChatBox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        message: '',
        messages: []
    };

    this.socket = io(ENDPOINT);
  
    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('sendChatMessage', { //TODO: DELETE THIS 
      // this.props.socket.emit('sendChatMessage', {
          author: this.props.user,
          message: this.state.message
      });
      this.setState({message: ''});
    }
    this.socket.on('RECEIVE_MESSAGE', msg =>{ //TODO: DELETE THIS 
    // this.props.socket.on('RECEIVE_MESSAGE', msg =>{
      console.log("MESSAGE PASSED IN", msg);
      this.setState({messages: [...this.state.messages, msg]});
      console.log("MESSAGES", this.state.messages);
      console.log("MESSAGES-1st", this.state.messages[0]);
    });
  }

  render(){
    return (
      <div>
      <div className={styles.messageBackground}>
        {this.state.messages.map(message => {
          return (
              <div>{this.props.user}: {message.message}</div>
          )
        })}
      </div>
      <div className= {styles.enterTextBox}>
        <input type="text" placeholder="Message" className="form-control" 
              value={this.state.message}
              onChange={ev => this.setState({message: ev.target.value})}/>
        <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
      </div>
      </div>
    );
}
}
  //   render() {
  //     return( 
  //       <div>
  //           
  //       </div>
  //     );
  //   }
  // }


export default ChatBox