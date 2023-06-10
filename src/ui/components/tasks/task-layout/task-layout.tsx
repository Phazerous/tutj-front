import { ReactNode } from 'react';
import styles from './task-layout.module.scss';

interface TaskLayoutProps {
  children: ReactNode;
}

export default function TaskLayout({ children }: TaskLayoutProps) {
  return <article className={styles.layout}>{children}</article>;
}
