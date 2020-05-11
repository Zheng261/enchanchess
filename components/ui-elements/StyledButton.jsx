import styles from './StyledButton.module.css'


const StyledButton = (props) => {
	return (
		<button className={styles.styledBtn}>
			{props.children}
		</button>
	)
}

export default StyledButton
