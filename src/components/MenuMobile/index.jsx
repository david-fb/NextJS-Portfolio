import { useState } from 'react';
import Link from 'next/link';
import { LINKS } from '@constants/index';
import styles from './index.module.scss';

export default function MenuMobileButton({ menuMobileRef }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={`${styles.closeButton} ${isOpen ? styles.active : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul ref={menuMobileRef} className={`${styles.content} ${isOpen ? styles.showMenu : ''}`}>
        {LINKS.map(({ name, href }) => (
          <li key={name} className={styles.item}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
