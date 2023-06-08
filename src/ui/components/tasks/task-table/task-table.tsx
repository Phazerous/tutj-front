import { useRouter } from 'next/router';
import TaskRow from '../task-row/task-row';

interface TaskTableProps {
  tasksInRow: number;
  taskIds: number[];
}

export default function TaskTable({ tasksInRow, taskIds }: TaskTableProps) {
  const router = useRouter();


  const handleClick = (taskId: number) => {
    const url = `tasks/:id`
  }

  return (
    <>
      <TaskRow
        tasksIds={taskIds}
        tasksInRow={tasksInRow}
      />
    </>
  );
}
