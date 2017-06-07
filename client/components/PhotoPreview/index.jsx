import React from 'react';
import PropTypes from 'prop-types';

// Display one div with just the photo, and another div with the applied filter and adjustable
// opacity to control 'intensity' (aka. rudimentary masking)
const PhotoPreview = ({ filter, photo }) => (
  <div className="relative flex-auto h-100">
    <div
      className="w-100 h-100 bg-center cover absolute top-0 left-0 bottom-0 right-0 z-4"
      style={{ backgroundImage: `url(${photo})` }}
    />
    <div
      className={`${filter.className} w-100 h-100 bg-center cover absolute top-0 left-0 bottom-0 right-0 z-5`}
      style={{ backgroundImage: `url(${photo})`, opacity: filter.strength / 100 }}
    />
  </div>
);

PhotoPreview.propTypes = {
  filter: PropTypes.object.isRequired,
  photo: PropTypes.string.isRequired,
};

export default PhotoPreview;
