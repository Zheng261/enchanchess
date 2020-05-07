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
            <PageLayout>
            <h1>To start a room, enter your username here!</h1>
            <div>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.changeUsername}
                    />
                <form onSubmit = {this.submitUsername}>
                    <button> submit</button>
                </form>
            </div> 
            {this.state.message != '' && <div className="message">{this.state.message}</div>}
            <RoomLinkComponent hidden={this.state.hiddenRoomLink} roomId={this.props.roomId} />
            </PageLayout>
        )
    }
}

export default GameStarter