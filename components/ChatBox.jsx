import React from 'react';


class ChatBox extends React.Component {
    render() {
      return( 
        <div>
            <p>This will become a chatbox, with roomID {this.props.roomId} </p>
            <p>Your name will be: {this.props.user} </p>
        </div>
      );
    }
  }


export default ChatBox