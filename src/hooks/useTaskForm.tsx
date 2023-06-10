import { ChangeEvent, useState } from 'react';
import { TaskSegmentType } from '../ui/components/tasks/task-segment-type.enum';
import Task from '../interfaces/task.interface';

interface TaskFormProps {
  task?: Task | undefined;
}

export default function useTaskForm({ task }: TaskFormProps = {}): [
  {
    description: string;
    answer: string;
    comment: string;
    code: string;
  },
  (segmentType: TaskSegmentType) => {
    content: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  }
] {
  const formObj = {
    [TaskSegmentType.DESCRIPTION]: task ? task.description : '',
    [TaskSegmentType.ANSWER]: task ? task.answer : '',
    [TaskSegmentType.COMMENT]: task ? task.comment : '',
    [TaskSegmentType.CODE]: task ? task.code : '',
  };

  const [form, setForm] = useState(formObj);

  const handleChange = (
    segmentType: TaskSegmentType,
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [segmentType]: e.target.value,
    });
  };

  const linkPropertyState = (segmentType: TaskSegmentType) => {
    return {
      content: form[segmentType],
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
        handleChange(segmentType, e),
    };
  };

  const {
    [TaskSegmentType.DESCRIPTION]: description,
    [TaskSegmentType.ANSWER]: answer,
    [TaskSegmentType.COMMENT]: comment,
    [TaskSegmentType.CODE]: code,
  } = form;

  const outputObj = {
    description,
    answer,
    comment,
    code,
  };

  return [outputObj, linkPropertyState];
}
