import styles from './HeaderLayout.module.css'

export default function HeaderLayout({children}) {
  return (
  <div className={styles.container}>
      <title>Cards Against Humanity</title>
      <link rel="icon" href="/favicon.ico" />
      <h2 className={styles.title}>
        Cards Against Humanity
      </h2>
      <p className={styles.description}>
        <code>social distancing edition</code>
      </p>
      {children}
  </div>
  );
}
