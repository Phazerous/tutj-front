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
  fileNameWithExtension: string;
  filePath: string;
}

import styles from './downloadable-file.module.scss';

export default function DownloadableFile({
  fileNameWithExtension,
  filePath,
}: DownloadableFileProps) {
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileNameWithExtension;

    link.click();
    link.remove();
  };

  return (
    <>
      <div
        className={styles.downloadable}
        onClick={handleDownloadClick}>
        {Icon}
        <h6>{fileNameWithExtension}</h6>
      </div>
    </>
  );
}
