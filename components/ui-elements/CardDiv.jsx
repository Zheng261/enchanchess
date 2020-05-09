import styles from './CardDiv.module.css'

// ui card element, used throughout app for game settings, card decks, players, etc,
// takes in children DOM elements 
const CardDiv = ({heading, children}) => {
  return (
    <div className={styles.bigCard}>
      <h2>{heading}</h2>
      {children}
    </div>
  )
}

export default CardDiv