import { useEffect, useRef } from 'react';
import Link from 'next/link';
import MenuMobile from '@components/MenuMobile';
import ResumeButtonDownload from './ResumeButtonDownload';
import { LINKS } from '@constants/index';
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
              link.classList.add(`${styles['menuItem-active']}`);
            } else {
              link.classList.remove(`${styles['menuItem-active']}`);
            }
            if (entry.target.id === 'Header') {
              navRef.current.classList.remove(`${styles['menu-background']}`);
            } else {
              navRef.current.classList.add(`${styles['menu-background']}`);
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
    <nav className={styles.container} ref={navRef}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a href="dummy" className={styles.logo}>
            DB.
          </a>
        </Link>
        <ul className={styles.menu} ref={menuRef}>
          {LINKS.map((link, index) => (
            <li key={`link-item-${index}`} className={styles.menuItem}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <li className={styles.download}>
            <ResumeButtonDownload />
          </li>
        </ul>
        <MenuMobile menuMobileRef={menuMobileRef} />
      </div>
    </nav>
  );
}
