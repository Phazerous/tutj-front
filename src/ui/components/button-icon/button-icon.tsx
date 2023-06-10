import Image from 'next/image';
import { ButtonIconType } from './button-icon.enum';
import styles from './button-icon.module.scss';

interface ButtonIconProps {
  buttonIcon: ButtonIconType;
  onClick?: () => void;
}

export default function ButtonIcon({ buttonIcon, onClick }: ButtonIconProps) {
  return (
    <>
      <div
        className={`${styles.container} ${styles[buttonIcon.key]}`}
        onClick={onClick}>
        <Image
          {...ButtonIconType.BACK.imageProps}
          alt={ButtonIconType.BACK.imageProps.alt}
        />
      </div>
    </>
  );
}
