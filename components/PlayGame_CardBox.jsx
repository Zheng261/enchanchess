import UserContext from '../components/UserContext';
import Link from 'next/link'
import styles from './playGame.module.css'

class PlayGame_CardBox extends React.Component {
    static contextType = UserContext
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <div className={styles.cardsgrid}>
                <Link href="/start-game" className={styles.a}>
                    <a className={styles.deckCard}>
                    <p>Nickelback</p>
                    </a>
                </Link>

                <Link href="/start-game" className={styles.a}>
                    <a className={styles.deckCard}>
                    <p>Nickelback</p>
                    </a>
                </Link>

                <Link href="/start-game" className={styles.a}>
                    <a className={styles.deckCard}>
                    <p>Nickelback</p>
                    </a>
                </Link>

                <Link href="/start-game" className={styles.a}>
                    <a className={styles.deckCard}>
                    <p>Nickelback</p>
                    </a>
                </Link>
            </div>
            <div className={styles.cardsgrid}>
                <Link href="/start-game" className={styles.a}>
                    <a className={styles.deckCard}>
                    <p>Nickelback</p>
                    </a>
                </Link>
                <Link href="/start-game" className={styles.a}>
                    <a className={styles.deckCard}>
                    <p>Nickelback</p>
                    </a>
                </Link>
            </div>
     </div>
        )
    }
}

export default PlayGame_CardBox