import Link from 'next/link'
//import styles from './PageLayout.module.css'
//import Header from './Header';
import cardStyles from './ui-elements/CardDiv.module.css'

/* moved to HeaderLayout
export default function PageLayout({children}) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <div classname={styles.grid}>

      </div>
    </div>
  );
}
*/

export default function BackCard() {
  return (
      <Link href="/" prefetch>
        <div className={cardStyles.card}>
          <p>Back</p>
        </div>
      </Link>
    );
}
