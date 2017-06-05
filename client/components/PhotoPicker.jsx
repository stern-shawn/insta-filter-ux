import React from 'react';
import PropTypes from 'prop-types';

const PhotoPicker = ({ setPhoto, styles }) => {
  let upload;

  // Helper func so that clicking the outer div will trigger native file dialog
  const triggerPhotoPicker = () => {
    upload.click();
  };

  // Convert the given photo to a dataURL, which can be used as the src for an img in the page
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const imageMIME = /image.*/;

    if (file.type.match(imageMIME)) {
      const reader = new FileReader();

      reader.onload = () => {
        setPhoto(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      alert('That file is not a supported image!');
    }
  };

  return (
    <button
      className={`${styles.emptyState} content has-text-centered`}
      onClick={triggerPhotoPicker}
    >
      <input
        type="file"
        className={styles.hiddenUpload}
        onChange={handlePhotoUpload}
        ref={(el) => { upload = el; }}
      />
      <h2>Click to upload a photo</h2>
    </button>
  );
};

PhotoPicker.propTypes = {
  setPhoto: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};

export default PhotoPicker;
