import { useState, useContext } from 'react'
//import PageLayout from '../components/PageLayout'
import UserContext from '../components/UserContext';
import Link from 'next/link'
import styles from './GameEntry.module.css'

/* merged with Play / Creative Private Room
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
*/ 

// component where player puts in username and can create room
const GameEntry = () => {
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

  const createRoom = function(event) {
    if (username !== '') {
      context.signIn(username);
    } else {
      setMsg('Please enter your username')
      event.preventDefault();
    } 
  }


  // {this.state.message != '' && <div className="message">{this.state.message}</div>}
  // <RoomLinkComponent hidden={this.state.hiddenRoomLink} roomId={this.props.roomId} />
  return (
    <div className={styles.bigcard}>
      <div className={styles.input}>
        <div className={styles.text}>
          Pick a username: 
        </div>
        <input
          type="text"
          value={username}
          onChange={changeUsername}
          onClick={clickInput}
        />
      </div> 
      {msg !== '' && <div className={styles.errorMsg}>{msg}</div>}
      <Link href="/start-game">
        <a className={styles.button}>
          <button onClick={createRoom}>Create Private Room</button>
        </a>
      </Link>
    </div>
  )
}

export default GameEntry;