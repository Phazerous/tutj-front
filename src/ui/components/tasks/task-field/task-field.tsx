interface TaskFieldProps {
  taskOrder: number;
}

import styles from './task-field.module.scss';

export default function TaskField({ taskOrder }: TaskFieldProps) {
  return (
    <>
      <div className={styles.field}>Задание №{taskOrder}</div>
    </>
  );
}
