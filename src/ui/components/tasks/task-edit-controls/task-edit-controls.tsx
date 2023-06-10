import Image from 'next/image';

interface TaskEditControlsProps {
  onBack: () => void;
  onSave: () => void;
}

import styles from './task-edit-controls.module.scss';

export default function TaskEditControls({
  onBack,
  onSave,
}: TaskEditControlsProps) {
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
          className={styles.save}
          onClick={onSave}>
          <h5>Save</h5>
        </div>
      </div>
    </>
  );
}
