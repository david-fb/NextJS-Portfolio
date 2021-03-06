import styles from '@styles/Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Slider from './Slider';
import videoIcon from '@assets/icons/video-icon.svg';
import linkIcon from '@assets/icons/link-icon.svg';
import grayAnimation from '@helpers/grayAnimation';

export default function Card({ project }) {
  const sliderRef = useRef(null);
  const { handleMouseEnter, handleMouseLeave } = grayAnimation();

  const createHandleMouseEnter = () => {
    handleMouseEnter(sliderRef.current.firstChild);
  };

  const createHandleMouseLeave = () => {
    handleMouseLeave(sliderRef.current.firstChild);
  };

  return (
    <div className={styles.container} onMouseEnter={createHandleMouseEnter} onMouseLeave={createHandleMouseLeave}>
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
          <a href={project?.liveWeb} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <figure className={styles.linkImage}>
              <Image src={linkIcon} layout="fill" alt={`Web ${project.title}`} />
            </figure>
            Live
          </a>
        </Link>
        {project?.youtube && (
          <Link href={project?.youtube}>
            <a href={project?.youtube} target="_blank" rel="noopener noreferrer" className={styles.link}>
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
