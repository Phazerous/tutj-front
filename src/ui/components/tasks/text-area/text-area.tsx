interface TextAreaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

import { ChangeEvent, useEffect, useRef } from 'react';
import styles from './text-area.module.scss';

export default function TextArea({ value, onChange }: TextAreaProps) {
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
        {value}
      </textarea>
    </>
  );
}
