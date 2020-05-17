import Link from 'next/link'
import styles from './GamePlay.module.css'
import GameCard from './game-objects/GameCard'
import cx from 'classnames'

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx

class PlayGame_CardBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            thisUserCards: [],
            socketTriggeredPostMount: false
        }
        this.drawCards = this.drawCards.bind(this);
      
    }

    componentDidMount() {
        this.drawCards(6, true, true)
    }

    drawCards = function(numDrawn = 1, redraw = false, startOfGame = false) {
        // If this gets triggered after we started the game, re-open socket
        // WHY DO WE HAVE TO RE-OPEN A SOCKET? BECAUSE IT AUTOMATICALLY SHUTS DOWN
        // AFTER COMPONENT MOUNTS AND WE HAVE NO IDEA WHY
        if (!this.state.socketTriggeredPostMount) {
            this.props.socket.on(('drawCardReply').concat(this.props.roomId), res => {
                var arrCopy = this.state.thisUserCards
                console.log(arrCopy)
                console.log(("card drawn: ").concat(res))
                 // pushes string to card drawn 
                arrCopy.push(res)
                this.setState({thisUserCards: arrCopy});
            });
            // Make sure we do this again after the mount phase
            if (!startOfGame) {
                this.setState({socketTriggeredPostMount: true})
            }
        }
        if (redraw) {
            this.setState({thisUserCards: []});
        }
        for (var i = 0; i < numDrawn; i++) {
            this.drawNewCard()
        }
    }

    drawNewCard = function() {
        console.log("trying to draw card...")
        // console.log(("checking for: ").concat(('drawCardReply').concat(this.props.roomId)))
        // Draws card for this room instance 
        this.props.socket.emit('drawCard', this.props.roomId)
    }

    render() {
        let cardBoxContent = [];
        for (var cardNum = 0; cardNum < this.state.thisUserCards.length; cardNum++) {
            // If we need to start a new row of cards
            cardBoxContent.push(
                <GameCard color={'white'} text={this.state.thisUserCards[cardNum]}/>);
        }
        return (
            <div className={cx(styles.item, styles.whiteCards, styles.cardContainer)}>
            <button onClick={() => this.drawCards(1, false)}>Draw Cards</button>
            <button onClick={() => this.drawCards(6, true)}>Redraw Hand</button>
    
                {cardBoxContent}
            </div>
        );
    }
}

export default PlayGame_CardBox 