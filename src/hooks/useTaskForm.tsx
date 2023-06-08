import { ChangeEvent, useState } from 'react';

interface TaskForm {
  description: string;
  answer: string;
  code: string;
  comment: string;
}

type propertyName = 'description' | 'answer' | 'code' | 'comment';

export default function useTaskForm(initialData: TaskForm) {
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

  return getPropertyState;
}
