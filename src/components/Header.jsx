import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ResumeButtonDownload from './ResumeButtonDownload';
import JSIcon from '@assets/icons/js.svg';
import NextJSIcon from '@assets/icons/nextjs.svg';
import ReactJsIcon from '@assets/icons/reactjs.svg';
import Html5Icon from '@assets/icons/html5.svg';
import Css3Icon from '@assets/icons/css3.svg';
import NodeJSIcon from '@assets/icons/nodejs.svg';
import GitIcon from '@assets/icons/git.svg';
import SassIcon from '@assets/icons/sass.svg';
import ExpressJSIcon from '@assets/icons/expressjs.svg';
import { SOCIAL_LINKS } from '@constants/index';
import ScrollDown from '@components/ScrollDown';
import styles from '@styles/Header.module.scss';

const images = [JSIcon.src, NextJSIcon.src, ReactJsIcon.src, Html5Icon.src, Css3Icon.src, NodeJSIcon.src, GitIcon.src, SassIcon.src, ExpressJSIcon.src];

export default function Header() {
  const headerRef = useRef(null);
  const timeout = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const createBgImage = () => {
      let size = Math.random() * 50;
      const bg = images[Math.floor(Math.random() * images.length)];
      const square = document.createElement('span');
      square.style.width = 20 + size + 'px';
      square.style.height = 20 + size + 'px';
      square.style.top = Math.random() * innerHeight + 'px';
      square.style.left = Math.random() * innerWidth + 'px';
      square.style.backgroundImage = `url(${bg})`;
      square.style.backgroundRepeat = 'no-repeat';
      square.style.backgroundPosition = 'center';
      square.style.backgroundSize = 'contain';
      square.classList.add(styles['square']);
      headerRef.current.appendChild(square);
      timeout.current = setTimeout(() => {
        square.remove();
      }, 5000);
    };
    const options = {
      root: null,
      threshold: 0.1,
      margin: '0px 0px',
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          interval.current = setInterval(createBgImage, 150);
        } else {
          clearInterval(interval.current);
        }
      });
    }, options);
    observer.observe(headerRef.current);

    return () => {
      clearInterval(interval.current);
      clearTimeout(timeout.current);
      observer.disconnect();
    };
  }, [headerRef]);

  return (
    <header ref={headerRef} className={`PageSection ${styles.container}`} id="Header">
      <div className={styles.content}>
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
        <p>Hi, I&apos;m</p>
        <h1 className={styles.title}>David Basto</h1>
        <h2 className={styles.subtitle}>Web Developer</h2>
        <ul className={styles.links}>
          <li className={styles.resume}>
            <ResumeButtonDownload />
          </li>
          <li>
            <Link href="#Contact">
              <a href="#Contact" className={`primary-button ${styles.talk}`}>
                Let&apos;s Talk
              </a>
            </Link>
          </li>
        </ul>
        <ScrollDown />
      </div>
    </header>
  );
}
