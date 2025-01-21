import React from "react";

interface FormImageProps {
  onFileChange: (file: File | null) => void;
}

const FormImage: React.FC<FormImageProps> = ({ onFileChange }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileChange(selectedFile);
    }
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <label>Upload a picture</label>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FormImage;
