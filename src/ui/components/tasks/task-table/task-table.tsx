import TaskField from '../task-field/task-field';

interface TaskTableProps {
  tasksIds: number[];
}

import styles from './task-table.module.scss';

export default function TaskTable({ tasksIds }: TaskTableProps) {
  return (
    <>
      <div className={styles.table}>
        {tasksIds.map((taskId, idx) => (
          <TaskField
            key={taskId}
            taskOrder={idx + 1}
            taskId={taskId}
          />
        ))}
      </div>
    </>
  );
}
