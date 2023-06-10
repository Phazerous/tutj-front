import styles from './task.module.scss';
import Task from '../../../../interfaces/task.interface';
import TaskFormEditable from '../task-form-editable/task-form-editable';
import TaskLayout from '../task-layout/task-layout';

interface TaskProps {
  task: Task;
}

export default function Task({ task }: TaskProps) {
  return (
    <>
      <TaskLayout>
        <h5>Задания 222222</h5>
        <TaskFormEditable task={task} />
      </TaskLayout>
    </>
  );
}
