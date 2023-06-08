import ITask from '../../../../interfaces/Task.interface';
import DownloadableFile from '../../downloadable-file/downloadable-file';
import styles from './task.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Task({
  id,
  idx,
  description,
  answer,
  code,
  filesNames = [],
  comment,
}: ITask & { idx: number }) {
  const files = filesNames.map((fileName: string, idx: number) => (
    <DownloadableFile
      key={idx}
      fileName={fileName}
    />
  ));

  //IMPLEMENT PRE CODE FORMATTING
  const formattedCode = !code ? null : (
    <div className={styles.segment}>
      <h6>Код</h6>
      <div className={styles.codeBlock}>
        <SyntaxHighlighter
          language='python'
          style={androidstudio}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );

  const formattedComment = !comment ? null : (
    <div className={styles.segment}>
      <h6>Комментарий</h6>
      <p>{comment}</p>
    </div>
  );

  return (
    <>
      <article className={styles.article}>
        <h5>Задания {idx}</h5>
        <div className={styles.content}>
          <div className={styles.segment + ' ' + styles.taskCondition}>
            <p>{description}</p>
            <div>{files}</div>
          </div>
          <div className={styles.segment}>
            <h6>Ответ</h6>
            <p>{answer}</p>
          </div>
          {formattedCode}
          {formattedComment}
        </div>
      </article>
    </>
  );
}
