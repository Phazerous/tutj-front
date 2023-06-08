import Image from 'next/image';
import ITask from '../../../../interfaces/Task.interface';
import DownloadableFile from '../../downloadable-file/downloadable-file';
import styles from './task.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useState } from 'react';
import TextArea from '../text-area/text-area';
import useTaskForm from '../../../../hooks/useTaskForm';

export default function Task({
  id,
  taskOrder,
  description = '',
  answer = '',
  code = '',
  filesPathes = [],
  comment = '',
}: ITask & { idx: number }) {
  const [isEditMode, setEditMode] = useState(false);
  const register = useTaskForm({
    description,
    answer,
    code,
    comment,
  });

  const handleEditMode = () => setEditMode(!isEditMode);

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

  function renderSegment(
    propertyName: 'descripiton' | 'answer' | 'code' | 'comment'
  ) {
    switch (propertyName) {
      case 'descripiton':
        return (
          <div className={styles.segment + ' ' + styles.taskCondition}>
            {isEditMode ? (
              <TextArea {...register('description')} />
            ) : (
              <p>{description}</p>
            )}
            <div>{files}</div>
          </div>
        );

      case 'answer':
        return (
          <div className={styles.segment}>
            <h5>Ответ</h5>
            {isEditMode ? (
              <TextArea {...register('answer')} />
            ) : (
              <p>{answer}</p>
            )}
          </div>
        );

      case 'code':
        if (!isEditMode && !(code && code.length !== 0)) return null;

        return (
          <div className={styles.segment}>
            <h6>Код</h6>
            {isEditMode ? (
              <TextArea {...register('code')} />
            ) : (
              <div className={styles.codeBlock}>
                <SyntaxHighlighter
                  language='python'
                  style={androidstudio}>
                  {code}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        );

      case 'comment':
        if (!isEditMode && !(comment && comment.length !== 0)) return null;

        return (
          <div className={styles.segment}>
            <h6>Комментарий</h6>
            {isEditMode ? (
              <TextArea {...register('comment')} />
            ) : (
              <p>{comment}</p>
            )}
          </div>
        );
    }
  }

  return (
    <>
      <article className={styles.article}>
        <h5>Задания {taskOrder}</h5>
        <div className={styles.content}>
          {renderSegment('descripiton')}
          {renderSegment('answer')}
          {renderSegment('code')}
          {renderSegment('comment')}
          <div
            className={styles.edit}
            onClick={handleEditMode}>
            {editIcon}
          </div>
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
