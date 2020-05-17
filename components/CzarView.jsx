import styles from './CzarView.module.css'

export default function CzarView() {
	return (
		<div className={styles.container}>
		<div className={styles.overlay}>
		</div>
		<div className={styles.czarTextContainer}>
		<div className={styles.czarText}>
		You are the Czar! 
		</div>
		</div>
		</div>
	)
}