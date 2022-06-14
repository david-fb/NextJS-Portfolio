import Image from 'next/image';
import hexagonImage from '@images/hexagon.png';
import grayAnimation from '@helpers/grayAnimation';
import styles from '@styles/HexagonImage.module.scss';

export default function HexagonImage() {
  const { handleMouseEnter, handleMouseLeave } = grayAnimation();
  const createHandleMouseEnter = (e) => {
    handleMouseEnter(e.currentTarget);
  };
  const createHandleMouseLeave = (e) => {
    handleMouseLeave(e.currentTarget);
  };
  return (
    <figure className={`gray ${styles.container}`} onMouseEnter={createHandleMouseEnter} onMouseLeave={createHandleMouseLeave}>
      <Image src={hexagonImage} layout="fill" alt="David basto" objectFit="contain" />
    </figure>
  );
}
