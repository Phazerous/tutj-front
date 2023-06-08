import ExamNumField from '../exam-num-field/exam-num-field';

interface ExamNumRowProps {
  elementsInRow: number;
  examNums: number[];
}

import styles from './exam-num-row.module.scss';

export default function ExamNumRow({
  elementsInRow = 4,
  examNums,
}: ExamNumRowProps) {
  return (
    <>
      <div className={styles.row}>
        {examNums.map((examNum, idx) => (
          <ExamNumField
            key={idx}
            examNum={examNum}
          />
        ))}
      </div>
    </>
  );
}
