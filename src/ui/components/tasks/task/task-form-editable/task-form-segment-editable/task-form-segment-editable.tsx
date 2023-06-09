import { ChangeEvent } from 'react';
import styles from './task-form-segment-editable.module.scss';
import TaskFormSegmentEditableTextarea from './task-form-segment-editable-textarea/task-form-segment-editable-textarea';
import { TaskSegmentType } from '../../task-segment-type.enum';

interface TaskSegmentProps {
  segmentType: TaskSegmentType;
  content: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TaskFormSegmentEditable({
  segmentType,
  content,
  onChange,
}: TaskSegmentProps) {
  return (
    <>
      <div className={styles.segment}>
        {segmentType ? <h6>{segmentType}</h6> : null}
        <TaskFormSegmentEditableTextarea
          content={content}
          onChange={onChange}
        />
      </div>
    </>
  );
}
