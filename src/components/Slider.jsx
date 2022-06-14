import { useState, useRef, useEffect, forwardRef } from 'react';
import Image from 'next/image';
import styles from '@styles/Slider.module.scss';

const Slider = forwardRef(({ images }, ref) => {
  const [imgPosition, setImgPosition] = useState(0);
  const dotsRef = useRef(null);

  useEffect(() => {
    const dots = dotsRef.current.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove(styles.active);
    }
    dots[imgPosition].classList.add(styles.active);
  }, [imgPosition]);

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
  return (
    <div className={styles.container} ref={ref}>
      <figure className={`${styles.image} gray`}>
        <Image src={images[imgPosition]} alt="web" layout="fill" objectFit="cover" />
      </figure>
      <div className={styles.dots} ref={dotsRef}>
        {images.map((img, index) => (
          <div onClick={() => handleClickDot(index)} onKeyUp={() => handleClickDot(index)} key={`dot-${index}`} role="button" tabIndex={0}></div>
        ))}
      </div>
      <button className={styles.left} onClick={() => plusSlides(-1)}>
        &lt;
      </button>
      <button className={styles.right} onClick={() => plusSlides(1)}>
        &gt;
      </button>
    </div>
  );
});
Slider.displayName = 'Slider';
export default Slider;
