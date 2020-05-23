import React from 'react';
import Dropzone, { DropzoneOptions } from 'react-dropzone';
import clsx from 'clsx';
import { t } from 'app/i18next-t';
import './FileUpload.scss';
import { AppIcon, uploadIcon } from 'app/shell/icons';

export default function FileUpload({
  accept,
  title,
  onDrop,
}: {
  accept?: string;
  title: string;
  onDrop: DropzoneOptions['onDrop'];
}) {
  return (
    <Dropzone onDrop={onDrop} accept={accept}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className={clsx('file-input', { 'drag-active': isDragActive })}>
          <input {...getInputProps()} />
          <div className="dim-button">
            <AppIcon icon={uploadIcon} /> {title}
          </div>
          <div className="file-input-instructions">{t('FileUpload.Instructions')}</div>
        </div>
      )}
    </Dropzone>
  );
}
