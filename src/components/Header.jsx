/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ResumeButtonDownload from './ResumeButtonDownload';
import githubIcon from '@assets/icons/github-brands.svg';
import twitterIcon from '@assets/icons/twitter-brands.svg';
import linkedinIcon from '@assets/icons/linkedin-brands.svg';
import JSIcon from '@assets/icons/js.svg';
import NextJSIcon from '@assets/icons/nextjs.svg';
import ReactJsIcon from '@assets/icons/reactjs.svg';
import Html5Icon from '@assets/icons/html5.svg';
import Css3Icon from '@assets/icons/css3.svg';
import NodeJSIcon from '@assets/icons/nodejs.svg';
import GitIcon from '@assets/icons/git.svg';
import SassIcon from '@assets/icons/sass.svg';
import ExpressJSIcon from '@assets/icons/expressjs.svg';
import ArrowDownIcon from '@assets/icons/arrow-down.svg';
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
        <ul className={styles['Header__content__social']}>
          <li className={styles['Header__content__social-item']}>
            <Link href={'https://github.com/david-fb'} passHref>
              <a target="_blank" rel="noreferrer">
                <Image src={githubIcon} layout="fill" alt="Github" />
              </a>
            </Link>
          </li>
          <li className={styles['Header__content__social-item']}>
            <Link href={'https://twitter.com/DavidB_M1'} passHref>
              <a target="_blank" rel="noreferrer">
                <Image src={twitterIcon} layout="fill" alt="Twitter" />
              </a>
            </Link>
          </li>
          <li className={styles['Header__content__social-item']}>
            <Link href={'https://www.linkedin.com/in/david-basto/'} passHref>
              <a target="_blank" rel="noreferrer">
                <Image src={linkedinIcon} layout="fill" alt="Linkedin" />
              </a>
            </Link>
          </li>
        </ul>
        <p>Hi, I&apos;m</p>
        <h1 className={styles['Header__content__title-name']}>David Basto</h1>
        <h2 className={styles['Header__content__title-description']}>Web Developer</h2>
        <ul className={styles['Header__content__links']}>
          <li className={styles['Header__content__links-resume']}>
            <ResumeButtonDownload />
          </li>
          <li>
            <Link href="#Contact">
              <a className={`primary-button ${styles['Header__content__links-talk']}`}>Let&apos;s Talk</a>
            </Link>
          </li>
        </ul>
        <div className={styles['Header__content__scroll']}>
          {/* Scroll down */}
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 1 }}>
            S
          </span>
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 2 }}>
            c
          </span>
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 3 }}>
            r
          </span>
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 4 }}>
            o
          </span>
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 5 }}>
            l
          </span>
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 6 }}>
            l
          </span>
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 7 }}>
            D
          </span>
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 8 }}>
            O
          </span>
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 9 }}>
            W
          </span>
          <span className={styles['Header__content__scroll-letter']} style={{ '--i': 10 }}>
            N
          </span>
          <figure className={styles['Header__content__scroll-letter']} style={{ '--i': 11 }}>
            <Image src={ArrowDownIcon} layout="fill" alt="" />
          </figure>
        </div>
      </div>
    </header>
  );
}
