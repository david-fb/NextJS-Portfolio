import Image from 'next/image';
import ReactJsIcon from '@assets/icons/reactjs.svg';
import Html5Icon from '@assets/icons/html5.svg';
import Css3Icon from '@assets/icons/css3.svg';
import JSIcon from '@assets/icons/js.svg';
import NextJSIcon from '@assets/icons/nextjs.svg';
import NodeJSIcon from '@assets/icons/nodejs.svg';
import VueJSIcon from '@assets/icons/vuejs.svg';
import GitIcon from '@assets/icons/git.svg';
import SassIcon from '@assets/icons/sass.svg';
import ExpressJSIcon from '@assets/icons/expressjs.svg';
import hexagonImage from '@images/hexagon.svg';
import styles from '@styles/About.module.scss';

export default function About() {
  return (
    <section className={`PageSection ${styles['About']}`} id="About">
      <h2 className={styles['About__title']}>Who am I?</h2>
      <div className={styles['About__content']}>
        <ul className={styles['About__content__container']}>
          <li className={styles['About__content__container__hexagon']}>
            <figure>
              <Image src={hexagonImage} layout="fill" alt="David basto" objectFit="contain" />
            </figure>
          </li>
          <li className={styles['About__content__container__text']}>
            <p>
              I am a Web Developer; I am passionate about new technologies, I like learning new things and always thinking about improving my skills. I adapt quickly to changes; I&apos;m a team
              player, friendly, and always willing to lend a helping hand. I would like to find a job where I can grow both personally and professionally
            </p>
          </li>
          <li className={styles['About__content__container__skills']}>
            <h3 className={styles['About__content__container__subtitle']}>Technologies</h3>
            <ul className={styles['About__content__container__skillsList']}>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={Html5Icon} alt="HTML5" layout="fill" objectFit="container" />
                </figure>
                <p>HTML5</p>
              </li>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={Css3Icon} alt="CSS3" layout="fill" objectFit="container" />
                </figure>
                <p>CSS3</p>
              </li>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={SassIcon} alt="SASS" layout="fill" objectFit="container" />
                </figure>
                <p>SASS</p>
              </li>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={JSIcon} alt="JavaScript" layout="fill" objectFit="container" />
                </figure>
                <p>JavaScript</p>
              </li>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={ReactJsIcon} alt="ReactJS" layout="fill" objectFit="container" />
                </figure>
                <p>ReactJS</p>
              </li>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={NextJSIcon} alt="NextJS" layout="fill" objectFit="container" />
                </figure>
                <p>NextJS</p>
              </li>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={VueJSIcon} alt="VueJS" layout="fill" objectFit="container" />
                </figure>
                <p>VueJS</p>
              </li>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={NodeJSIcon} alt="NodeJS" layout="fill" objectFit="container" />
                </figure>
                <p>NodeJS</p>
              </li>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={ExpressJSIcon} alt="ExpressJS" layout="fill" objectFit="container" />
                </figure>
                <p>ExpressJS</p>
              </li>
              <li className={styles['About__content__container__skillsList-item']}>
                <figure>
                  <Image src={GitIcon} alt="Git" layout="fill" objectFit="container" />
                </figure>
                <p>Git</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
