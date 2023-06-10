import { ButtonColor } from './button-color.enum';
import { ButtonSize } from './button-size.enum';
import styles from './button.module.scss';

interface ButtonProps {
  buttonColor: ButtonColor;
  buttonSize: ButtonSize;
  content: string;
  onClick: () => void;
}

export default function Button({
  buttonColor,
  buttonSize,
  content,
  onClick,
}: ButtonProps) {
  const computedStyles = `${styles.button} ${styles[buttonColor]} ${styles[buttonSize]}`;

  return (
    <div
      className={computedStyles}
      onClick={onClick}>
      <h5 className='noSelect'>{content}</h5>
    </div>
  );
}
