import ExamNumField from '../exam-num-field/exam-num-field';

interface ExamNumsTableProps {
  examNums: number[];
  handleClick: (examNum: number) => void;
}

import styles from './exam-num-table.module.scss';

export default function ExamNumTable({
  examNums,
  handleClick,
}: ExamNumsTableProps) {
  return (
    <>
      <div className={styles.table}>
        {examNums.map((examNum) => (
          <ExamNumField
            onClick={handleClick}
            key={examNum}
            examNum={examNum}
          />
        ))}
      </div>
    </>
  );
}
