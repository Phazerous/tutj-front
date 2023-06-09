import Image from 'next/image';
import ITask from '../../../../interfaces/Task.interface';
import DownloadableFile from '../../downloadable-file/downloadable-file';
import styles from './task.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useState } from 'react';
import TextArea from '../text-area/text-area';
import useTaskForm from '../../../../hooks/useTaskForm';
import TaskViewControls from './task-view-controls/task-view-controls';
import TaskEditControls from './task-edit-controls/task-edit-controls';
import { useRouter } from 'next/router';

export default function Task({
  id,
  taskOrder,
  examNum,
  description = '',
  answer = '',
  code = '',
  filesPathes = [],
  comment = '',
}: ITask & { idx: number }) {
  const router = useRouter();

  const handleSave = () => {
    router.reload();
  };

  const [isEditMode, setEditMode] = useState(false);
  const { getPropertyState: register, handleSaveChanges } = useTaskForm(
    {
      id,
      examNum,
      description,
      answer,
      code,
      comment,
    },
    { onSave: handleSave }
  );

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
    propertyName: 'descripiton' | 'answer' | 'code' | 'comment' | 'controls'
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

      case 'controls':
        if (isEditMode)
          return (
            <TaskEditControls
              onBack={() => setEditMode(false)}
              onSave={handleSaveChanges}
            />
          );

        return <TaskViewControls onEdit={() => setEditMode(true)} />;
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
          {renderSegment('controls')}
        </div>
      </article>
    </>
  );
}
