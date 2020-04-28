import Link from 'next/link'
import styles from './PageLayout.module.css'

function PageLayout({ children }) {
  return (
    <div className={styles.container}>
      {children}
       <Link href="/" prefetch>
        <a>
          Back
        </a>
      </Link>
    </div>
  )
}

export default PageLayout