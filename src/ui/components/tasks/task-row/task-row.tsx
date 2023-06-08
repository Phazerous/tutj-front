import TaskField from '../task-field/task-field';

interface TaskRowProps {
  tasksInRow: number;
  tasksIds: number[];
}

import styles from './task-row.module.scss';

export default function TaskRow({ tasksInRow, tasksIds }: TaskRowProps) {
  return (
    <>
      <div className={styles.row}>
        {tasksIds.map((taskId, idx) => (
          <TaskField
            key={taskId}
            taskOrder={idx}
          />
        ))}
      </div>
    </>
  );
}
