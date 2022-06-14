import Image from 'next/image';
import grayAnimation from '@helpers/grayAnimation';
import styles from '@styles/SkillItem.module.scss';
export default function SkillItem({ icon, name }) {
  const { handleMouseEnter, handleMouseLeave } = grayAnimation();
  const createHandleMouseEnter = (e) => {
    handleMouseEnter(e.currentTarget.firstChild);
  };
  const createHandleMouseLeave = (e) => {
    handleMouseLeave(e.currentTarget.firstChild);
  };
  return (
    <li className={styles.container} onMouseEnter={createHandleMouseEnter} onMouseLeave={createHandleMouseLeave}>
      <figure className="gray">
        <Image src={icon} layout="fill" alt={name} objectFit="contain" />
      </figure>
      <p>{name}</p>
    </li>
  );
}
