import styles from '@styles/Projects.module.scss';
import CardList from './CardList';
import { PROJECTS } from '@constants/index';

export default function Projects() {
  return (
    <section className={`PageSection ${styles.container}`} id="Projects">
      <h2 className={styles.title}>Recent works</h2>
      <CardList projects={PROJECTS} />
    </section>
  );
}
