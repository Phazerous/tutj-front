import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useSWR from 'swr';
import { get } from '../../lib/routing/base';
import TaskTable from '../../ui/components/tasks/task-table/task-table';

import styles from '../../styles/main.module.scss';

export default function Tasks() {
  const router = useRouter();
  const { examNum } = router.query;

  useEffect(() => {
    if (router.isReady && !examNum) router.push('/examNums');
  }, [router.isReady]);

  const { data, error } = useSWR(
    examNum ? `tasks?examNum=${examNum}` : null,
    examNum ? get : null
  );

  const tasksIds = data as unknown as number[];

  if (!router.isReady) return 'Establishing the Router.';
  if (!tasksIds) return 'Loading data.';

  return (
    <>
      <h2 className={styles.title}>Задания ЕГЭ №{examNum}</h2>

      <TaskTable tasksIds={tasksIds} />
    </>
  );
}
