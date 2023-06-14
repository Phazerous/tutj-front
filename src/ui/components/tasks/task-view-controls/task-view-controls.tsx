import Image from 'next/image';
import styles from './task-view-controls.module.scss';

interface TaskViewControls {
  onEdit: () => void;
  onBack: () => void;
}

export default function TaskViewControls({ onEdit, onBack }: TaskViewControls) {
  return (
    <>
      <div className={styles.controls}>
        <div
          className={styles.back}
          onClick={onBack}>
          <Image
            className={styles.noSelectable}
            src='/icons/back.svg'
            width={20}
            height={12}
            alt='Back Icon'
          />
        </div>

        <div
          className={styles.edit}
          onClick={onEdit}>
          <Image
            src='/icons/edit.svg'
            width={18}
            height={18}
            className={styles.noSelectable}
            alt='Edit Icon'
          />
        </div>
      </div>
    </>
  );
}
