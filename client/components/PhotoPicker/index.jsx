import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PhotoPicker = ({ setPhoto }) => {
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
    <div
      className={`${styles.emptyState} absolute tc top-1 left-1 right-1 bottom-1 flex items-center justify-center pa3 ba`}
      onClick={triggerPhotoPicker}
    >
      <input
        type="file"
        className={styles.hiddenUpload}
        onChange={handlePhotoUpload}
        ref={(el) => { upload = el; }}
      />
      <h2>Click to upload a photo</h2>
    </div>
  );
};

PhotoPicker.propTypes = {
  setPhoto: PropTypes.func.isRequired,
};

export default PhotoPicker;
