import { useState, useContext } from 'react'
import PageLayout from '../components/PageLayout'
import UserContext from '../components/UserContext';
import Link from 'next/link'

function RoomLinkComponent(props) {
    if (props.hidden) {
      return null;
    }
    var roomLink = "/room/";
    roomLink = roomLink.concat(props.roomId)
    return (
        <Link href = {roomLink}>
            <button> Go to room!</button>
        </Link>
    );
  }


const GameStarter = () => {
  // static contextType = UserContext
  const context = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [msg, setMsg] = useState('');

  const changeUsername = function(event) {
    setUsername(event.target.value)
    if (event.target.value !== '') {
      setMsg('')
    }
  }

  const clickInput = function() {
    // clear input on click
    console.log("cleared input")
    setUsername('')
  }

  const submitUsername = function(event) {
    event.preventDefault();
    // const contextUser = this.context;
    if (username !== '') {
      context.signIn(username);
    } else {
      setMsg('Please enter your username')
    } 
  }

  // {this.state.message != '' && <div className="message">{this.state.message}</div>}
  // <RoomLinkComponent hidden={this.state.hiddenRoomLink} roomId={this.props.roomId} />
  return (
    <div className="game-starter-bigcard">
      <div className="game-starter-input">
        <div className="game-starter-text">
          Pick a username: 
        </div>
        <input
          type="text"
          value={username}
          onChange={changeUsername}
          onClick={clickInput}
        />
      </div> 
      {msg !== '' && <div>{msg}</div>}
      <form onSubmit = {submitUsername}>
        <a className="game-starter-button">
          <button>Play!</button>
        </a>
        </form>
        <Link href="/start-game">
          <a className="game-starter-button">
            <button>Create Private Room</button>
          </a>
        </Link>
    </div>
  )
}

export default GameStarter;