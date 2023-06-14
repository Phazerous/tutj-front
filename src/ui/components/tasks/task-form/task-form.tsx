import Task from '../../../../interfaces/task.interface';
import { TaskSegmentType } from '../task-segment-type.enum';
import TaskFormSegment from './task-form-segment/task-form-segment';
import styles from './task-form.module.scss';

interface TaskFormProps {
  task: Task;
}

export default function TaskForm({ task }: TaskFormProps) {
  const segments: { segmentType: TaskSegmentType; content: string }[] = [
    { segmentType: TaskSegmentType.DESCRIPTION, content: task.description },
    { segmentType: TaskSegmentType.ANSWER, content: task.answer },
    { segmentType: TaskSegmentType.CODE, content: task.code },
    { segmentType: TaskSegmentType.COMMENT, content: task.comment },
  ];

  console.log(segments);

  return (
    <>
      <form className={styles.form}>
        {segments.map((segmentProps) => (
          <TaskFormSegment
            key={segmentProps.segmentType}
            {...segmentProps}
          />
        ))}
      </form>
    </>
  );
}
