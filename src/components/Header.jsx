import Image from 'next/image';
import imgPerson from '@images/person_programming.jpg';
import styles from '@styles/Header.module.scss';

export default function Header() {
  return (
    <header className={`PageSection ${styles.Header}`} id="Header">
      <h1>
        <span className={styles['Header__title-hello']}>Hola, soy David, FullStack Web Developer </span>
        <br />
        FullStack JavaScript. En busca del desarrollo profesional
      </h1>
      <figure>
        <Image src={imgPerson} alt="person programming" priority />
      </figure>
    </header>
  );
}
