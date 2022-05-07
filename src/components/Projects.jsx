import styles from '@styles/Projects.module.scss';
import CardList from './CardList';
export default function Projects() {
  return (
    <section className={`PageSection ${styles['Projects']}`} id="Projects">
      <h2 className={styles['Projects__title']}>Projects</h2>
      <CardList />
    </section>
  );
}
