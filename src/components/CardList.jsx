import Card from '@components/Card';
import styles from '@styles/CardList.module.scss';

export default function CardList() {
  return (
    <div className={styles['CardList']}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
