import useSWR from 'swr';
import { get } from '../lib/routing/base';
import ExamNumTable from '../ui/components/exam-num/exam-num-table/exam-num-table';

import styles from '../styles/main.module.scss';
import { useRouter } from 'next/router';

export default function ExamNums() {
  const { data, error } = useSWR('examNums', get);
  const router = useRouter();

  const examNums: number[] = data as unknown as number[];

  if (!data) return 'Loading';

  const handleClick = (examNum: number) => {
    router.push(`/tasks?examNum=${examNum}`);
  };

  return (
    <>
      <h2 className={styles.title}>Задания</h2>

      <ExamNumTable
        handleClick={handleClick}
        examNums={examNums}
      />
    </>
  );
}
