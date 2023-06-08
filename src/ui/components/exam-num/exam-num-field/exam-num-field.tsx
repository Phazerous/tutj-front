interface ExamNumFieldProps {
  examNum: number;
}

import styles from './exam-num-field.module.scss';

export default function ExamNumField({ examNum }: ExamNumFieldProps) {
  return (
    <>
      <div className={styles.field}>Задание ЕГЭ №{examNum}</div>
    </>
  );
}
