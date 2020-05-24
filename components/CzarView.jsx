import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import styles from './CzarView.module.css';

export default function CzarView() {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.czarText}>
        You are the Czar, enjoy your potty throne!
        {' '}
        <FontAwesomeIcon icon={faToilet} />
      </div>
    </div>
  );
}
