import React from 'react';
import PropTypes from 'prop-types';

const PhotoPreview = ({ filter, photo }) => (
  <div
    className={`${filter.className} bg-center cover flex-auto`}
    style={{ backgroundImage: `url(${photo})` }}
  />
);

PhotoPreview.propTypes = {
  filter: PropTypes.object.isRequired,
  photo: PropTypes.string.isRequired,
};

export default PhotoPreview;
