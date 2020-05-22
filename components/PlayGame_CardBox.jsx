import Link from 'next/link'
import styles from './GamePlay.module.css'
import GameCard from './game-objects/GameCard'
import cx from 'classnames'
import CzarView from './CzarView'
import { Html5Entities } from 'html-entities'


// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx
class PlayGame_CardBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            thisUserCards: [],
            canPlayCards: true
        }
        this.drawCards = this.drawCards.bind(this);
        this.playCard = this.playCard.bind(this);
    }

    componentDidMount() {
        const htmlEntities = new Html5Entities()
        this.props.socket.on(('drawCardReply').concat(this.props.roomId), res => {
            var arrCopy = this.state.thisUserCards
            console.log(arrCopy)
            console.log(("card drawn: ").concat(res))
             // pushes string to card drawn 
            arrCopy.push(htmlEntities.decode(res).replace(/<br>/g, "\n"))
            this.setState({thisUserCards: arrCopy});
        });

        // Once a card has been picked, we can play cards again
        this.props.socket.on(('pickCardReply'), res => {
            this.setState({canPlayCards: true});
        });

        this.drawCards(6, true, true)
    }

    drawCards = function(numDrawn = 1, redraw = false, startOfGame = false) {
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

    playCard = function(cardNum) {
        // Only if we can play cards 
        if (this.state.canPlayCards) {
            console.log("Playing card ", this.state.thisUserCards[cardNum])
            this.props.socket.emit('playCard', 
            // Passes what card the user played, the room ID, and the username
            {roomId: this.props.roomId,
            user: this.props.user,
            card: this.state.thisUserCards[cardNum]}
            )
            // Get rid of card
            let newUserCards = this.state.thisUserCards
            newUserCards.splice(cardNum,1);
            this.setState({thisUserCards: newUserCards})
            // Can't play cards until one is picked
            this.setState({canPlayCards: false})
        }
    }

    render() {
        let cardBoxContent = [];
        for (var cardNum = 0; cardNum < this.state.thisUserCards.length; cardNum++) {
            // If we need to start a new row of cards
            let tempCardNum = cardNum
            
            cardBoxContent.push(
                <div key={cardNum} onClick = {() => this.playCard(tempCardNum)} >
                    <GameCard color={'white'} text={this.state.thisUserCards[cardNum]}/>
                </div>
            );

         }

        if (this.props.czar === this.props.user) {
            return(
                <div>
                <div className={cx(styles.item, styles.whiteCards, styles.cardContainer)}>
                <button onClick={() => this.drawCards(1, false)}>Draw Cards</button>
                <button onClick={() => this.drawCards(6, true)}>Redraw Hand</button>
                    {cardBoxContent}
                </div>
                <CzarView />
                </div>
                );
        } else {
            return (
                <div className={cx(styles.item, styles.whiteCards, styles.cardContainer)}>
                <button onClick={() => this.drawCards(1, false)}>Draw Cards</button>
                <button onClick={() => this.drawCards(6, true)}>Redraw Hand</button>
                    {cardBoxContent}
                </div>
            );
        }
    }
}

export default PlayGame_CardBox 