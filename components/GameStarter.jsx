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

class GameStarter extends React.Component {
    static contextType = UserContext

    constructor(props) {
        super(props);
        this.state = { user: '', message: '', hiddenRoomLink: true};
        this.setMessage = this.setMessage.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.submitUsername = this.submitUsername.bind(this)
    }

    setMessage = function(str) {
        this.setState((state, props) => ({
            message: str
        }));
    }

    changeUsername = function(event) {
        this.setState({user: event.target.value});
    }

    submitUsername = function(event) {
        event.preventDefault();
        const contextUser = this.context;
        if (this.state.user != '') {
            contextUser.signIn(this.state.user);
            this.setState((state, props) => ({
                hiddenRoomLink: false
            }));
        } else {
        this.setMessage('Please enter your username');
        }
    }
    
    render() {
        return (
            <div className="game-starter-bigcard">
            <div className="game-starter-input">
                <span className="game-starter-text">Pick a username: <br /></span>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.changeUsername}
                />
            </div> 
            <form onSubmit = {this.submitUsername}>
                <a className="game-starter-button">
                <button>Play!</button>
              </a>
              </form>
              <Link href="/start-game">
              <a className="game-starter-button">
                <button>Create Private Room</button>
              </a>
              </Link>
              {this.state.message != '' && <div className="message">{this.state.message}</div>}
            <RoomLinkComponent hidden={this.state.hiddenRoomLink} roomId={this.props.roomId} />
            </div>
        )
    }
}

export default GameStarter;