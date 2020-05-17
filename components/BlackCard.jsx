import styles from './GamePlay.module.css'
import GameCard from './game-objects/GameCard'

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx
class BlackCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        	blackCardText: "",
        	blackCardPick: 0,
            socketTriggeredPostMount: false
        }
        this.drawBlackCard = this.drawBlackCard.bind(this);
      
    }

    componentDidMount() {
    	this.drawBlackCard(true);
        this.props.socket.on(('drawBlackCardReply').concat(this.props.roomId), res => {
            console.log(("black card drawn: ").concat(res.text))
            let newText = res.text.replace(/_/g, "_____")
            this.setState({blackCardText: newText, blackCardPick: res.pick});
        });
    }

    drawBlackCard = function(startOfGame = false) { 
        if (!this.state.socketTriggeredPostMount) {
            // Make sure we do this again after the mount phase
            if (!startOfGame) {
                this.setState({socketTriggeredPostMount: true})
            }
        }
        console.log("trying to draw black card...")
        this.props.socket.emit('drawBlackCard', this.props.roomId)
    }

    render() {
        return (
        	<GameCard 
        	color={'black'} 
        	text={this.state.blackCardText}
        	/>
        );
    }
}

export default BlackCard