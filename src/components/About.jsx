import { ABOUT_ME } from '@constants/index';
import SkillItem from './SkillItem';
import HexagonImage from './HexagonImage';
import styles from '@styles/About.module.scss';

export default function About() {
  return (
    <section className={`PageSection ${styles.container}`} id="About">
      <h2 className={styles.title}>{ABOUT_ME.title}</h2>
      <ul className={styles.content}>
        <li className={styles.hexagon}>
          <HexagonImage />
        </li>
        <li className={styles.text}>
          <p>{ABOUT_ME.description}</p>
        </li>
        <li className={styles.technologies}>
          <h3 className={styles.technologiesTitle}>Technologies</h3>
          <ul className={styles.skills}>
            {ABOUT_ME.skills.map((skill, index) => (
              <SkillItem key={`skill-${index}`} name={skill.name} icon={skill.icon} />
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
}
