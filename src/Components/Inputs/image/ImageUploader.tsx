import React from 'react';

interface ImageUploaderProps {
  file: File | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ file }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      console.log('Choose a picture');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'merabi');
    formData.append('cloud_name', 'djjye4dc1');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/djjye4dc1/image/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Cloudinary API error:', errorResponse);
        throw new Error(`error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Uploaded Image URL:', data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={!file}>
        ატვირთვა
      </button>
    </form>
  );
};

export default ImageUploader;
