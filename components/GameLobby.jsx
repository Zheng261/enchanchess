import PageLayout from '../components/PageLayout'
import UserContext from '../components/UserContext';
import ChatBox from '../components/ChatBox';

class GameLobby extends React.Component {
    static contextType = UserContext

    constructor(props) {
        super(props);
        this.state = { user: ""}
        this.setMessage = this.setMessage.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    render() {
        let value = this.context.user
        return (
            <PageLayout>
            <h1>Game Room</h1>
            <div>Welcome, {this.context.user} </div>
            <p>*not party owner edition, will distinguish some other time*</p>
            <p>room id: {this.props.roomId}</p>
            <h2># of Connected Players</h2>
            <p>{this.props.players.length}</p>
            <button onClick = {this.handleClick}>Test</button>
            <ChatBox roomId = {this.props.roomId} user = {this.context.user} ></ChatBox>
            </PageLayout>
        )
    }
}

export default GameLobby
