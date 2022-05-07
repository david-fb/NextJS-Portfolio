import styles from '@styles/Projects.module.scss';
export default function Projects() {
  return (
    <section className={`PageSection ${styles['Projects']}`} id="Projects">
      <h2 className={styles['Projects__title']}>Projects</h2>
    </section>
  );
}
