import styles from './GamePlay.module.css'
import GameCard from './game-objects/GameCard'
import React, { useState, useContext, useEffect} from 'react'
import { Html5Entities } from 'html-entities'

// Called from Gameplay.jsx, which is in turn called by GameLobby.jsx


export default function BlackCard(props) {
    const [blackCardText, setBlackCardText] = useState(""); 
    const [blackCardPick, setBlackCardPick] = useState(0); 

    const drawBlackCard = () => { 
        console.log("trying to draw black card for room ...", props.roomId)
        props.socket.emit('drawBlackCard', props.roomId)
    }

    useEffect(() => {
        const htmlEntities = new Html5Entities()
        // Update black card
        props.socket.on('drawBlackCardReply', res => {
            console.log(("black card drawn: ").concat(res.text))
            let newText = htmlEntities.decode(res.text.replace(/_/g, "_____"))
            newText = newText.replace(/<br>/g, "\n")
            setBlackCardText(newText)
            setBlackCardPick(res.pick)
        });

        drawBlackCard()
    }, [])

    return (
        <GameCard 
        color={'black'} 
        text={blackCardText}
        />
    );


}
