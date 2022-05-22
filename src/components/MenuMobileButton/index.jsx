import { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
export default function MenuMobileButton({ menuMobileRef }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={`${styles['MenuMobileButton']} ${isOpen ? styles['active'] : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul ref={menuMobileRef} className={`${styles['MenuMobile']} ${isOpen ? styles['showMenu'] : ''}`}>
        <li className={styles['MenuMobile__item']}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles['MenuMobile__item']}>
          <Link href="#Projects">Projects</Link>
        </li>
        <li className={styles['MenuMobile__item']}>
          <Link href="#About">About Me</Link>
        </li>
        <li className={styles['MenuMobile__item']}>
          <Link href="#Contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
