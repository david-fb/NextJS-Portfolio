import ArrowDownIcon from '@assets/icons/arrow-down.svg';
import Image from 'next/image';
import styles from '@styles/ScrollDown.module.scss';

const WORD = 'scrolldown';

export default function ScrollDown() {
  const element = [];
  for (let i = 0; i < WORD.length; i++) {
    element.push(
      <span key={`scrollDown-${i}`} className={styles.letter} style={{ '--i': i + 1 }}>
        {WORD[i]}
      </span>
    );
    if (i === WORD.length - 1) {
      element.push(
        <figure key={`scrollDown-arrow`} className={styles.letter} style={{ '--i': i + 2 }}>
          <Image src={ArrowDownIcon} layout="fill" alt="" />
        </figure>
      );
    }
  }

  return <div className={styles.container}>{element}</div>;
}
