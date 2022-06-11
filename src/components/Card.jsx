import styles from '@styles/Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Slider from './Slider';
import videoIcon from '@assets/icons/video-icon.svg';
import linkIcon from '@assets/icons/link-icon.svg';

export default function Card({ project }) {
  const sliderRef = useRef(null);
  const handleMouseEnter = () => {
    sliderRef.current.firstChild.style.filter = 'grayscale(0%)';
  };
  const handleMouseLeave = () => {
    sliderRef.current.firstChild.style.filter = 'grayscale(100%)';
  };

  return (
    <div className={styles.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Slider ref={sliderRef} images={project.images} />
      <h3 className={styles.title}>{project?.title}</h3>
      <p className={styles.subtitle}>{project.area.join(' & ')}</p>
      <p className={styles.description}>{project?.description}</p>
      <ul className={styles.technologies}>
        {project?.technologies.map((item, index) => (
          <li key={`${project.name}-technology-${index}`} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <Link href={project?.liveWeb}>
          <a href="web" target="_blank" className={styles.link}>
            <figure className={styles.linkImage}>
              <Image src={linkIcon} layout="fill" alt="Web" />
            </figure>
            Live
          </a>
        </Link>
        {project?.youtube && (
          <Link href={project?.youtube}>
            <a href="video" target="_blank" className={styles.link}>
              <figure className={styles.linkImage}>
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
