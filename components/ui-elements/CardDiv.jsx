import styles from './CardDiv.module.css'

// ui card element, used throughout app for game settings, card decks, players, etc,
// takes in children DOM elements 
const CardDiv = (props) => {
  return (
    <div className={styles.card}>
      <h2>{props.heading}</h2>
      {props.children}
    </div>
  )
}

export default CardDiv