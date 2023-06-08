import useSWR from 'swr';
import { get } from '../lib/routing/base';
import ExamNumTable from '../ui/components/exam-num/exam-num-table/exam-num-table';

export default function ExamNums() {
  const { data, error } = useSWR('examNums', get);
  const examNums: number[] = data as unknown as number[];

  if (!data) return 'Loading';

  return (
    <ExamNumTable
      elementsInRow={4}
      examNums={examNums}
    />
  );
}
