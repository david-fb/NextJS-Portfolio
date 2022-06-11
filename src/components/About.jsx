import Image from 'next/image';
import hexagonImage from '@images/hexagon.png';
import { ABOUT_ME } from '@constants/index';
import styles from '@styles/About.module.scss';

export default function About() {
  return (
    <section className={`PageSection ${styles.container}`} id="About">
      <h2 className={styles.title}>{ABOUT_ME.title}</h2>
      <ul className={styles.content}>
        <li className={styles.hexagon}>
          <figure>
            <Image src={hexagonImage} layout="fill" alt="David basto" objectFit="contain" />
          </figure>
        </li>
        <li className={styles.text}>
          <p>{ABOUT_ME.description}</p>
        </li>
        <li className={styles.technologies}>
          <h3 className={styles.technologiesTitle}>Technologies</h3>
          <ul className={styles.skills}>
            {ABOUT_ME.skills.map((skill, index) => (
              <li key={index} className={styles.skill}>
                <figure>
                  <Image src={skill.icon} layout="fill" alt={skill.name} objectFit="contain" />
                </figure>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
}
