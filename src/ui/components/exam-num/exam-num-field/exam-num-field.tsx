interface ExamNumFieldProps {
  examNum: number;
  onClick: (examNum: number) => void;
}

import styles from './exam-num-field.module.scss';

export default function ExamNumField({ examNum, onClick }: ExamNumFieldProps) {
  return (
    <>
      <div
        className={styles.field}
        onClick={() => onClick(examNum)}>
        <h5>Задание ЕГЭ № {examNum}</h5>
      </div>
    </>
  );
}
