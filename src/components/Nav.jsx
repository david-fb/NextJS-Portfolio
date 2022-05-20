import styles from '@styles/Nav.module.scss';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const options = {
  root: null,
  threshold: 0.7,
  margin: '50px 0px',
};

export default function Nav() {
  const navRef = useRef(null);

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
            if (entry.target.id === 'Header') {
              navRef.current.classList.remove(`${styles['Menu-background']}`);
            } else {
              navRef.current.classList.add(`${styles['Menu-background']}`);
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
    <nav className={styles.Nav} ref={navRef}>
      <Link href="/">
        <a href="dummy" className={styles['Nav__logo']}>
          DB.
        </a>
      </Link>
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
      <button className={`primary-button ${styles['Nav__button-download']}`}>Download CV</button>
    </nav>
  );
}
