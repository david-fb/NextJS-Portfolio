import { useRef, useEffect } from 'react';
import JSIcon from '@assets/icons/js.svg';
import NextJSIcon from '@assets/icons/nextjs.svg';
import ReactJsIcon from '@assets/icons/reactjs.svg';
import Html5Icon from '@assets/icons/html5.svg';
import Css3Icon from '@assets/icons/css3.svg';
import NodeJSIcon from '@assets/icons/nodejs.svg';
import GitIcon from '@assets/icons/git.svg';
import SassIcon from '@assets/icons/sass.svg';
import ExpressJSIcon from '@assets/icons/expressjs.svg';
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
    <header ref={headerRef} className={`PageSection ${styles.Header}`} id="Header">
      <div className={styles['Header__content']}>
        <p>Hi, I&apos;m</p>
        <h1 className={styles['Header__title-name']}>David Basto</h1>
        <p>Full Stack Web Developer.</p>
      </div>
    </header>
  );
}
