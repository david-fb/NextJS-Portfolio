import styles from '@styles/Card.module.scss';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const images = [
  'https://i.pinimg.com/736x/99/25/60/9925601fec16cfd1c28125fcc4def93d--design-web-type-design.jpg',
  'https://geekflare.com/wp-content/uploads/2019/04/Whimsical-design.png',
  'https://www.salixdesigns.com/wp-content/uploads/2021/11/how-to-design-a-website-21-1024x500-1.png',
];

export default function Card() {
  const [imgPosition, setImgPosition] = useState(0);
  const imgRef = useRef(null);
  const dotsRef = useRef(null);

  const plusSlides = (n) => {
    if (imgPosition + n > images.length - 1) {
      setImgPosition(0);
    } else if (imgPosition + n < 0) {
      setImgPosition(images.length - 1);
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
        <Image src={images[imgPosition]} alt="web" layout="fill" objectFit="cover" />
        <div className={styles['Card__image__dots']} ref={dotsRef}>
          {images.map((img, index) => (
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
      <h3>Store Frontend & Backend</h3>
      <p>Description project, this is the description for the project made with NextJS</p>
      <h3>Tecnologies</h3>
      <p>ReactJS, NodeJS, ExpressJS, SCSS, Git</p>
    </div>
  );
}
