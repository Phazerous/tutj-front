interface TaskSegment {
  segmentType: TaskSegmentType;
  content?: string;
}

import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/default-highlight';
import { TaskSegmentType } from '../../../task-segment-type.enum';
import { androidstudio } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from './task-form-segment.module.scss';

export default function TaskFormSegment({ segmentType, content }: TaskSegment) {
  if (!content) return;

  return (
    <>
      <div className={styles.segment}>
        {segmentType ? <h5>{segmentType}</h5> : null}
        {segmentType === TaskSegmentType.CODE ? (
          renderCode(content)
        ) : (
          <p>{content}</p>
        )}
      </div>
    </>
  );
}

const renderCode = (code: string) => {
  return (
    <SyntaxHighlighter
      language='python'
      style={androidstudio}
      customStyle={{ fontSize: '14px', borderRadius: '4px' }}>
      {code}
    </SyntaxHighlighter>
  );
};
