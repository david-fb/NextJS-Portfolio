import Card from '@components/Card';
import styles from '@styles/CardList.module.scss';

export default function CardList({ projects }) {
  return (
    <div className={styles.container}>
      {projects?.map((project) => (
        <Card key={`Project-${project.id}`} project={project} />
      ))}
    </div>
  );
}
