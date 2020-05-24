import styles from './CzarView.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToilet } from '@fortawesome/free-solid-svg-icons'

export default function CzarView() {
	return (
		<div className={styles.parentContainer}>
			<div className={styles.czarText}>
				You are the Czar, enjoy your potty throne! <FontAwesomeIcon icon={faToilet} />
			</div>
		</div>
	)
}