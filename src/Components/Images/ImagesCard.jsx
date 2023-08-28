import React, { useState } from 'react';
import './ImageCard.css';

const ImageCard = ({ imageUrl }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsDownloading(false);
      })
      .catch((error) => {
        console.error('Error downloading image:', error);
        setIsDownloading(false);
      });
  };

  return (
    <div className="image-card">
      <img
        src={imageUrl}
        alt="Pixabay"
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      {imageLoaded && (
        <button disabled={isDownloading} onClick={handleDownload}>
          {isDownloading ? 'Downloading...' : '🡻'}
        </button>
      )}
    </div>
  );
};

export default ImageCard;