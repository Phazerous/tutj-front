import { ChangeEvent, useEffect, useRef } from 'react';
import styles from './task-form-segment-editable-textarea.module.scss';

interface TextAreaProps {
  content: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TaskFormSegmentEditableTextarea({
  content,
  onChange,
}: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const textareaElement = textareaRef.current;
      textareaElement.style.height = '1px';
      textareaElement.style.height = `${textareaElement.scrollHeight}px`;
    }
  }, []);

  return (
    <>
      <textarea
        className={styles.textarea}
        onChange={onChange}
        ref={textareaRef}>
        {content}
      </textarea>
    </>
  );
}
