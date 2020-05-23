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
    };

    this.messagesEnd = React.createRef()
  
    this.sendMessage = ev => {
      ev.preventDefault();
      // this.socket.emit('sendChatMessage', { //TODO: DELETE THIS 
      this.props.socket.emit('sendChatMessage', {
          author: this.props.user + ":",
          message: this.state.message,
          roomId: this.props.roomId
      });
      this.setState({message: ''});
    }
    // this.socket.on('RECEIVE_MESSAGE', msg =>{ //TODO: DELETE THIS 
    this.props.socket.on(('RECEIVE_MESSAGE').concat(this.props.roomId), (data) =>{
			console.log("DATA", data);
			this.setState({userMessages: [...this.state.userMessages, data]});
    });

    this.scrollToBottom = this.scrollToBottom.bind(this)
  }


  // componentDidUpdate() { 
	// 	this._div.scrollTop = this._div.scrollHeight;
	// }

	 scrollToBottom() {
	 	// lel not working
    this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
  }

	componentDidMount() {
    this.scrollToBottom()
  }
  componentDidUpdate() {
    this.scrollToBottom()
  }

  render(){
    return (
			<div className= {styles.gamechat}>
				<div className = {styles.messages} ref={(ref) => this._div = ref}>
						{this.state.userMessages.map(data => {
							return (
								<div className = {styles.notification}>
									<div className = {data.isUserUpdate? styles.playerText : styles.gameNotification}>
										<strong>{data.message.author}</strong> {data.message.message}
									</div>
								</div>
							)
						})}
				</div>
				<div ref={this.messagesEnd} />
				<form onSubmit={this.sendMessage}>
				
				<input  
					type="text" placeholder="Enter message" className = {styles.gamechat}
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