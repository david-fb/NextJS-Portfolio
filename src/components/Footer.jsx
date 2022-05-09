/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '@assets/icons/github-brands.svg';
import twitterIcon from '@assets/icons/twitter-brands.svg';
import linkedinIcon from '@assets/icons/linkedin-brands.svg';
import mailIcon from '@assets/icons/envelope-solid.svg';
import styles from '@styles/Footer.module.scss';

export default function Footer() {
  const copyToClipboard = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText('davidbasto01@gmail.com');
    return Promise.reject('The Clipboard API is not avaible');
  };
  return (
    <footer className={styles.Footer}>
      <button onClick={copyToClipboard} className={styles['Footer-mail']} title="click to copy email to clipboard">
        <figure className={styles['Footer-mail_image']}>
          <Image src={mailIcon} alt="Email" layout="fill" />
        </figure>
        davidbasto01@gmail.com
      </button>
      <div className={styles['Footer-social']}>
        <Link href={'https://twitter.com/DavidB_M1'}>
          <a className={styles['Footer-social-item']} target="_blank" rel="noreferrer">
            <Image src={twitterIcon} layout="fill" alt="twitter" />
          </a>
        </Link>
        <Link href={'https://github.com/david-fb'}>
          <a className={styles['Footer-social-item']} target="_blank" rel="noreferrer">
            <Image src={githubIcon} layout="fill" alt="github" />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/david-basto/'}>
          <a className={styles['Footer-social-item']} target="_blank" rel="noreferrer">
            <Image src={linkedinIcon} layout="fill" alt="linkedin" />
          </a>
        </Link>
      </div>
    </footer>
  );
}
