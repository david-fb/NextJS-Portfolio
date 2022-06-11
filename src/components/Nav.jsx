import { useEffect, useRef } from 'react';
import Link from 'next/link';
import MenuMobile from '@components/MenuMobile';
import ResumeButtonDownload from './ResumeButtonDownload';
import styles from '@styles/Nav.module.scss';

const options = {
  root: null,
  threshold: 0.25,
  margin: '0px 0px',
};

export default function Nav() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuMobileRef = useRef(null);

  useEffect(() => {
    let target = '.PageSection';
    const links = [...menuRef.current.children, ...menuMobileRef.current.children];
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
  }, [menuRef, menuMobileRef]);

  return (
    <nav className={styles.Nav} ref={navRef}>
      <Link href="/">
        <a href="dummy" className={styles['Nav__logo']}>
          DB.
        </a>
      </Link>
      <ul className={styles.Menu} ref={menuRef}>
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
        <li className={styles['Menu__item-download']}>
          <ResumeButtonDownload />
        </li>
      </ul>
      <MenuMobile menuMobileRef={menuMobileRef} />
    </nav>
  );
}
