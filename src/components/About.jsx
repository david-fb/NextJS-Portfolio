import styles from '@styles/About.module.scss';

export default function About() {
  return (
    <section className={`PageSection ${styles['About']}`} id="About">
      <h2 className={styles['About__title']}>About Me</h2>
    </section>
  );
}
