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
    <div className="flex flex-col items-start justify-around m-5">
      <div className={"flex flex-row justify-between items-left mb-3"}>
        <label>Upload your profile picture</label>
        <h1 className="ml-5 font-thin text-gray-500">Optional</h1>
      </div>
      <input
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FormImage;
