import TaskFormSegmentEditable from './task-form-segment-editable/task-form-segment-editable';
import styles from './task-form-editable.module.scss';
import { TaskSegmentType } from '../task-segment-type.enum';
import { ChangeEvent } from 'react';
import Task from '../../../../interfaces/task.interface';

interface TaskFormProps {
  task?: Task;
  linkPropertyState: (segmentType: TaskSegmentType) => {
    content: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  };
}

export default function TaskFormEditable({
  linkPropertyState,
  task,
}: TaskFormProps) {
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
            {...linkPropertyState(segment)}
          />
        ))}
      </form>
    </>
  );
}
