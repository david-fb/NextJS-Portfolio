/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from '@styles/Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import videoIcon from '@assets/icons/video-icon.svg';
import linkIcon from '@assets/icons/link-icon.svg';

export default function Card({ project }) {
  const [imgPosition, setImgPosition] = useState(0);
  const imgRef = useRef(null);
  const dotsRef = useRef(null);

  const plusSlides = (n) => {
    if (imgPosition + n > project.images.length - 1) {
      setImgPosition(0);
    } else if (imgPosition + n < 0) {
      setImgPosition(project.images.length - 1);
    } else {
      setImgPosition(imgPosition + n);
    }
  };

  const handleClickDot = (index) => {
    setImgPosition(index);
  };

  useEffect(() => {
    const dots = dotsRef.current.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove(styles['active']);
    }
    dots[imgPosition].classList.add(styles['active']);
  }, [imgPosition]);

  const handleMouseEnter = () => {
    imgRef.current.firstChild.style.filter = 'grayscale(0%)';
  };
  const handleMouseLeave = () => {
    imgRef.current.firstChild.style.filter = 'grayscale(100%)';
  };

  return (
    <div className={styles['Card']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <figure className={styles['Card__image']} ref={imgRef}>
        <Image src={project?.images[imgPosition]} alt="web" layout="fill" objectFit="cover" />
        <div className={styles['Card__image__dots']} ref={dotsRef}>
          {project?.images.map((img, index) => (
            <div onClick={() => handleClickDot(index)} onKeyUp={() => handleClickDot(index)} key={`dot-${index}`} role="button" tabIndex={0}></div>
          ))}
        </div>
        <button className={styles['Card__image__button-left']} onClick={() => plusSlides(-1)}>
          &lt;
        </button>
        <button className={styles['Card__image__button-right']} onClick={() => plusSlides(1)}>
          &gt;
        </button>
      </figure>
      <h3 className={styles['Card__title']}>{project?.title}</h3>
      <p className={styles['Card__projectArea']}>{project.area.join(' & ')}</p>
      <p className={styles['Card__text']}>{project?.description}</p>
      <ul className={styles['Card__technologies']}>
        {project?.technologies.map((item, index) => (
          <li key={`${project.name}-technology-${index}`} className={styles['Card__technologies__item']}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles['Card__links']}>
        <Link href={project?.liveWeb}>
          <a target="_blank" className={styles['Card__links__item']}>
            <figure className={styles['Card__links__item-image']}>
              <Image src={linkIcon} layout="fill" alt="Video" />
            </figure>
            Live
          </a>
        </Link>
        {project?.youtube && (
          <Link href={project?.youtube}>
            <a target="_blank" className={styles['Card__links__item']}>
              <figure className={styles['Card__links__item-image']}>
                <Image src={videoIcon} layout="fill" alt="Video" />
              </figure>
              Video
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
