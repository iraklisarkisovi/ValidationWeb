import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

import React from "react";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'djjye4dc1',
  },
});

const CloudinaryImage: React.FC = () => {
  const image = cloudinary.image("your_image_public_id");

  image.resize(fill().width(300).height(200));

  return (
    <div>
      <h1>Cloudinary Image</h1>
      <AdvancedImage cldImg={image} />
    </div>
  );
};

export default CloudinaryImage;
