import Image from 'next/image';

const Icon = (
  <Image
    src='/icons/download.svg'
    width={16}
    height={16}
    alt='Donwloadable File'
  />
);

interface DownloadableFileProps {
  fileName: string;
}

import styles from './downloadable-file.module.scss';

export default function DownloadableFile({ fileName }: DownloadableFileProps) {
  return (
    <>
      <div className={styles.downloadable}>
        {Icon}
        <h6>{fileName}</h6>
      </div>
    </>
  );
}
