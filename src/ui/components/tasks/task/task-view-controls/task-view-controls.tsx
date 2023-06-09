import Image from 'next/image';
import styles from './task-view-controls.module.scss';

interface TaskViewControls {
  onEdit: () => void;
}

export default function TaskViewControls({ onEdit }: TaskViewControls) {
  return (
    <>
      <div className={styles.controls}>
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
