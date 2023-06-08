import { createArrayChunk } from '../../../../lib/utils';
import ExamNumRow from '../exam-num-row/exam-num-row';

interface ExamNumsTableProps {
  examNums: number[];
  elementsInRow: number;
}

import styles from './exam-num-table.module.scss';

export default function ExamNumTable({
  examNums,
  elementsInRow,
}: ExamNumsTableProps) {
  const rows = createArrayChunk(examNums, elementsInRow);

  return (
    <>
      <div className={styles.table}>
        {rows.map((row, idx) => (
          <ExamNumRow
            key={idx}
            examNums={row}
            elementsInRow={elementsInRow}
          />
        ))}
      </div>
    </>
  );
}
