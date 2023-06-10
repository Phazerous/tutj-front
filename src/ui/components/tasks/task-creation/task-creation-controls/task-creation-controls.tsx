import ButtonIcon from '../../../button-icon/button-icon';
import { ButtonIconType } from '../../../button-icon/button-icon.enum';
import Button from '../../../button/button';
import { ButtonColor } from '../../../button/button-color.enum';
import { ButtonSize } from '../../../button/button-size.enum';
import styles from './task-creation-controls.module.scss';

interface TaskCreationControlsProps {
  onBack: () => void;
  onSave: () => void;
}

export default function TaskCreationControls({
  onBack,
  onSave,
}: TaskCreationControlsProps) {
  return (
    <>
      <div className={styles.controls}>
        <ButtonIcon
          buttonIcon={ButtonIconType.BACK}
          onClick={onBack}
        />
        <Button
          buttonColor={ButtonColor.PRIMARY}
          buttonSize={ButtonSize.MEDIUM}
          content='Создать'
          onClick={onSave}
        />
      </div>
    </>
  );
}
