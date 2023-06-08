import { useRouter } from 'next/router';
import useSWR from 'swr';
import { get } from '../../../lib/routing/base';
import { Task } from '../../../ui/components/tasks/task.interface';

export default function TaskPage() {
  const router = useRouter();
  const taskId = router.query.id;

  return <>{taskId}</>;
}
