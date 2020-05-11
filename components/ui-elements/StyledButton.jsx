import styles from './StyledButton.module.css'


const StyledButton = (props) => {
	return (
		<button className={styles.styledBtn} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default StyledButton
