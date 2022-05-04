import styles from '@styles/Nav.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';

const options = {
  root: null,
  threshold: 0.7,
  margin: '50px 0px',
};

export default function Nav() {
  useEffect(() => {
    let target = '.PageSection';
    const links = document.querySelectorAll(`.${styles['Menu__item']}`);
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            if (link.firstChild.textContent.includes(entry.target.id)) {
              link.classList.add(`${styles['Menu__item-active']}`);
            } else {
              link.classList.remove(`${styles['Menu__item-active']}`);
            }
          });
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    document.querySelectorAll(target).forEach((item) => {
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.Nav}>
      <p>DB.</p>
      <ul className={styles.Menu}>
        <li className={styles['Menu__item']}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles['Menu__item']}>
          <Link href="#Projects">Projects</Link>
        </li>
        <li className={styles['Menu__item']}>
          <Link href="#About">About Me</Link>
        </li>
        <li className={styles['Menu__item']}>
          <Link href="#Contact">Contact</Link>
        </li>
      </ul>
      <button>Descargar CV</button>
    </nav>
  );
}
