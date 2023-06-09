interface TaskFieldProps {
  taskOrder: number;
  taskId: number;
}

import { useRouter } from 'next/router';
import styles from './task-field.module.scss';

export default function TaskField({ taskOrder, taskId }: TaskFieldProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tasks/${taskId}`);
  };

  return (
    <>
      <div
        className={styles.field}
        onClick={handleClick}>
        <h5>Задание №{taskOrder}</h5>
      </div>
    </>
  );
}
