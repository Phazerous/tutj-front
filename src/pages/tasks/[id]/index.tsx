import { useRouter } from 'next/router';
import useSWR from 'swr';
import { get } from '../../../lib/routing/base';
import Task from '../../../ui/components/tasks/task/task';

interface temp {
  id: number;
  description: string;
  examNum: number;
  answer: string;
  code: string;
  comment: string;
  filesPathes: string[];
}

export default function TaskPage() {
  const router = useRouter();
  const taskId = router.query.id;

  const { data, isLoading } = useSWR(`tasks/${taskId}`, get);

  if (!data) return <h1>Loading</h1>;

  const taskData = data as unknown as temp;

  return <Task task={{ ...taskData }} />;
}
