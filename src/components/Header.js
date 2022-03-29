import styles from '@styles/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <nav className={styles.Header}>
      <h1>DB.</h1>
      <ul className={styles.Menu}>
        <li className={styles['Menu__item'] + ' ' + styles[router.pathname == '/' ? 'Menu__item-active' : '']}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles['Menu__item'] + ' ' + styles[router.pathname == '/projects' ? 'Menu__item-active' : '']}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles['Menu__item'] + ' ' + styles[router.pathname == '/contact' ? 'Menu__item-active' : '']}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles['Menu__item'] + ' ' + styles[router.pathname == '/about' ? 'Menu__item-active' : '']}>
          <Link href="/about">About Me</Link>
        </li>
      </ul>
      <button>Descargar CV</button>
    </nav>
  );
}
