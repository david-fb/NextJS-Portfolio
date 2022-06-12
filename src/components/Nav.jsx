import { useEffect, useRef } from 'react';
import Link from 'next/link';
import MenuMobile from '@components/MenuMobile';
import ResumeButtonDownload from './ResumeButtonDownload';
import { LINKS } from '@constants/index';
import styles from '@styles/Nav.module.scss';

export default function Nav() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuMobileRef = useRef(null);

  useEffect(() => {
    const links = [...menuRef.current.children, ...menuMobileRef.current.children];
    const sections = document.querySelectorAll('.PageSection');
    const onScroll = () => {
      let current;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) {
          current = section;
        }
      });

      links.forEach((link) => {
        link.classList.remove(`${styles['menuItem-active']}`);
        if (link.firstChild.textContent.includes(current.id)) {
          link.classList.add(`${styles['menuItem-active']}`);
        }
        if (current.id === 'Header') {
          navRef.current.classList.remove(`${styles['menu-background']}`);
        } else {
          navRef.current.classList.add(`${styles['menu-background']}`);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

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
