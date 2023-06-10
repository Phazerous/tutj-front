import { ReactNode } from 'react';
import styles from './task-controls-container.module.scss';

interface TaskControlsContainerProps {
  children: ReactNode;
}

export default function TaskControlsContainer({
  children,
}: TaskControlsContainerProps) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}
