import styles from '@styles/Header.module.scss';

export default function Header() {
  return (
    <header className={`PageSection ${styles.Header}`} id="Header">
      <div>
        <p>Hi, I&apos;m</p>
        <h1 className={styles['Header__title-name']}>David Basto</h1>
        <p>Full Stack JavaScript Developer.</p>
      </div>
    </header>
  );
}
