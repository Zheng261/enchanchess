import styles from './CardButton.module.css'


const CardButton = (props) => {
  return (
    <button className={styles.cardBtn} onClick={props.onClick}>
      <p>
        {props.text}
      </p>
    </button>
  )
}

export default CardButton