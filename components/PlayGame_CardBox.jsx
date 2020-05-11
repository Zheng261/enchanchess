import UserContext from '../components/UserContext';
import Link from 'next/link'
import styles from './playGame.module.css'
import Card from './Game_Objects/card.js'

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx

class PlayGame_CardBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            thisUserCards: []
        }
        this.drawCards = this.drawCards.bind(this);
    }

    componentDidMount() {
        this.props.socket.on(('drawCardReply').concat(this.props.roomId), res => {
            var arrCopy = this.state.thisUserCards
            console.log(arrCopy)
            console.log(("card drawn: ").concat(res))
             // param 1 = string text, param 2 = whether card is black
            arrCopy.push(new Card(res, false))
            this.setState({thisUserCards: arrCopy});
        });
        this.drawCards(6, true)
    }
    
    drawCards = function(numDrawn = 1, redraw = false) {
        console.log(this.state.thisUserCards)
        if (redraw) {
            this.setState({thisUserCards: []});
        }
        for (var i = 0; i < numDrawn; i++) {
            this.drawNewCard()
        }
    }


    drawNewCard = function() {
        console.log("trying to draw card...")
        // Draws card for this room instance 
        this.props.socket.emit('drawCard', this.props.roomId)
    }

    render() {
        let cardBoxContent = [];
        for (var cardNum = 0; cardNum < this.state.thisUserCards.length; cardNum++) {
            // If we need to start a new row of cards
            cardBoxContent.push(
                <Link href="/start-game" className={styles.a}>
                    <a className={styles.deckCard}>
                    <p>{this.state.thisUserCards[cardNum].str}</p>
                    </a>
                </Link>);
        }
        return (
        <div>
        <button onClick={() => this.drawCards(1, false)}>Draw Cards</button>
        <button onClick={() => this.drawCards(6, true)}>Shuffle</button>
            <div className={styles.cardsgrid}>
               {cardBoxContent}
            </div>
        </div>
        );
    }
}

export default PlayGame_CardBox