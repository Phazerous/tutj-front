import styles from './task.module.scss';
import TaskForm from './task-form/task-form';
import Task from '../../../../interfaces/task.interface';
import TaskFormEditable from './task-form-editable/task-form-editable';

interface TaskProps {
  task: Task;
}

export default function Task({ task }: TaskProps) {
  return (
    <>
      <article className={styles.article}>
        <h5>Задания 222222</h5>
        <TaskFormEditable task={task} />
      </article>
    </>
  );
}
