import React from 'react';
import PropTypes from 'prop-types';

const PhotoPreview = ({ filters, photo, selectedFilter }) => (
  <div
    className={`${filters[selectedFilter].className} bg-center cover flex-auto`}
    style={{ backgroundImage: `url(${photo})` }}
  />
);

PhotoPreview.propTypes = {
  filters: PropTypes.array.isRequired,
  photo: PropTypes.string.isRequired,
  selectedFilter: PropTypes.number.isRequired,
};

export default PhotoPreview;
