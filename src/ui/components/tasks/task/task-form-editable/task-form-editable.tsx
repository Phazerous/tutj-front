import useTaskForm from '../../../../../hooks/useTaskForm';
import Task from '../../../../../interfaces/task.interface';
import TaskFormSegmentEditable from './task-form-segment-editable/task-form-segment-editable';
import styles from './task-form-editable.module.scss';
import { TaskSegmentType } from '../task-segment-type.enum';

interface TaskFormProps {
  task?: Task;
}

export default function TaskFormEditable({ task }: TaskFormProps = {}) {
  const { getPropertyState } = useTaskForm({ task });

  const segments: TaskSegmentType[] = [
    TaskSegmentType.DESCRIPTION,
    TaskSegmentType.ANSWER,
    TaskSegmentType.CODE,
    TaskSegmentType.COMMENT,
  ];

  return (
    <>
      <form className={styles.form}>
        {segments.map((segment) => (
          <TaskFormSegmentEditable
            key={segment}
            segmentType={segment}
            {...getPropertyState(segment)}
          />
        ))}
      </form>
    </>
  );
}
