import React from 'react';

interface FileInputProps {
  onFileChange: (file: File) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileChange(selectedFile);
    }
  };

  return (
    <div>
      <label htmlFor="file-input">ატვირთეთ სურათი</label>
      <input id="file-input" type="file" onChange={handleChange} />
    </div>
  );
};

export default FileInput;
