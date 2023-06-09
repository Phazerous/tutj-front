import { ChangeEvent, useState } from 'react';
import { TaskSegmentType } from '../ui/components/tasks/task/task-segment-type.enum';
import Task from '../interfaces/task.interface';

interface TaskFormProps {
  task?: Task | undefined;
}

export default function useTaskForm({ task }: TaskFormProps = {}) {
  const formObj = {
    id: task ? task.id : undefined,
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

  const getPropertyState = (segmentType: TaskSegmentType) => {
    return {
      content: form[segmentType],
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
        handleChange(segmentType, e),
    };
  };

  return { getPropertyState };
}
