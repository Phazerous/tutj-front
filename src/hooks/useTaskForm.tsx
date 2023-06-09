import { ChangeEvent, useState } from 'react';
import { patch } from '../lib/routing/base';

interface TaskForm {
  id: number;
  examNum: number;
  description: string;
  answer: string;
  code: string;
  comment: string;
}

interface SaveProps {
  onSave: () => void;
}

type propertyName = 'description' | 'answer' | 'code' | 'comment';

export default function useTaskForm(
  initialData: TaskForm,
  { onSave }: SaveProps
) {
  const [form, setForm] = useState<TaskForm>({ ...initialData });

  console.log({ ...initialData });

  const handleChange = (
    propertyName: propertyName,
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [propertyName]: e.target.value,
    });
  };

  const getPropertyState = (propertyName: propertyName) => {
    return {
      value: form[propertyName],
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
        handleChange(propertyName, e),
    };
  };

  const handleSaveChanges = async () => {
    console.log(form);

    const response = await patch(`tasks/${initialData.id}`, form);

    if (response) onSave();
  };

  return { getPropertyState, handleSaveChanges };
}
