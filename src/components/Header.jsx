import Image from 'next/image';
import Link from 'next/link';
import ResumeButtonDownload from './ResumeButtonDownload';
import { SOCIAL_LINKS } from '@constants/index';
import ScrollDown from '@components/ScrollDown';
import ParticlesAnimation from './ParticlesAnimation';
import styles from '@styles/Header.module.scss';

export default function Header() {
  return (
    <header className={`PageSection ${styles.container}`} id="Header">
      <div className={styles.content}>
        <ul className={styles.social}>
          {SOCIAL_LINKS.map((link, index) => (
            <li key={`social-link-${index}`} className={styles.socialItem}>
              <Link href={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <figure>
                    <Image src={link.icon} alt={link.name} layout="fill" />
                  </figure>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <p>Hi, I&apos;m</p>
        <h1 className={styles.title}>David Basto</h1>
        <h2 className={styles.subtitle}>Web Developer</h2>
        <ul className={styles.links}>
          <li className={styles.resume}>
            <ResumeButtonDownload />
          </li>
          <li>
            <Link href="#Contact">
              <a href="#Contact" className={`primary-button ${styles.talk}`}>
                Let&apos;s Talk
              </a>
            </Link>
          </li>
        </ul>
        <ScrollDown />
      </div>
      <ParticlesAnimation />
    </header>
  );
}
