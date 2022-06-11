import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@constants/index';
import mailIcon from '@assets/icons/envelope-solid.svg';
import styles from '@styles/Footer.module.scss';

export default function Footer() {
  const copyToClipboard = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText('davidbasto01@gmail.com');
    return Promise.reject('The Clipboard API is not avaible');
  };
  return (
    <footer className={styles.container}>
      <button onClick={copyToClipboard} className={styles.mailButton} title="click to copy email to clipboard">
        <figure className={styles.mailImage}>
          <Image src={mailIcon} alt="Email" layout="fill" />
        </figure>
        davidbasto01@gmail.com
      </button>
      <ul className={styles.social}>
        {SOCIAL_LINKS.map((link, index) => (
          <li key={`social-link-${index}`} className={styles.socialItem}>
            <Link href={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Image src={link.icon} alt={link.name} layout="fill" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
