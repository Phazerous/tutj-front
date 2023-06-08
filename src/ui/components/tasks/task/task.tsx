import Image from 'next/image';
import ITask from '../../../../interfaces/Task.interface';
import DownloadableFile from '../../downloadable-file/downloadable-file';
import styles from './task.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Task({
  id,
  taskOrder,
  description,
  answer,
  code,
  filesPathes = [],
  comment,
}: ITask & { idx: number }) {
  const files = filesPathes.map((filePath: string, idx: number) => {
    const chunks = filePath.split('.');
    const extension = chunks.slice(-1);

    if (extension === undefined) throw new Error('FilePath Extension Error');

    return (
      <DownloadableFile
        key={idx}
        fileNameWithExtension={`${idx + 1}.${extension}`}
        filePath={filePath}
      />
    );
  });

  const codeSegment = !code ? null : (
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

  const commentSegment = !comment ? null : (
    <div className={styles.segment}>
      <h6>Комментарий</h6>
      <p>{comment}</p>
    </div>
  );

  return (
    <>
      <article className={styles.article}>
        <h5>Задания {taskOrder}</h5>
        <div className={styles.content}>
          <div className={styles.segment + ' ' + styles.taskCondition}>
            <p>{description}</p>
            <div>{files}</div>
          </div>
          <div className={styles.segment}>
            <h6>Ответ</h6>
            <p>{answer}</p>
          </div>
          {codeSegment}
          {commentSegment}
          <div className={styles.edit}>{editIcon}</div>
        </div>
      </article>
    </>
  );
}

const editIcon = (
  <Image
    src='/icons/edit.svg'
    width={18}
    height={18}
    className={styles.noSelect}
    alt='Edit Icon'
  />
);
