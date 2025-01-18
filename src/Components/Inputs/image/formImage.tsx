import React, { useState } from 'react';
import FileInput from './FileInput';
import ImageUploader from './ImageUploader';

const FormImage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div style={{ width: '500px', margin: '50px auto', display: 'flex', flexDirection: 'column' }}>
      <FileInput onFileChange={setFile} />
      <ImageUploader file={file} />
    </div>
  );
};

export default FormImage;
