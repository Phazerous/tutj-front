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
  const handleDownloadClick = async () => {
    const response = await fetch(filePath);

    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileNameWithExtension;
    document.body.appendChild(link);
    link.click();

    URL.revokeObjectURL(url);
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
