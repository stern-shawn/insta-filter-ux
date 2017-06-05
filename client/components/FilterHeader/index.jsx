import React from 'react';

import styles from './styles.scss';

const FilterHeader = () => (
  <div className={`${styles.filterHeader} flex items-center relative overflow-hidden`}>
    <div className="w-third">
      <button className="mr1 black-60 bg-transparent bn pv0 flex items-center">
        <i className="material-icons">keyboard_arrow_left</i>
      </button>
    </div>
    <div className="w-third flex justify-center">
      <img className="h2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/500px-Instagram_logo.svg.png" alt="" />
    </div>
    <div className="w-third flex justify-end pr3">
      <h5 className="mv0 flex fw5 items-center f5"><a className="link blue" href="http://lmgtfy.com/?q=instagram" target="_blank">Next</a></h5>
    </div>
  </div>
);

export default FilterHeader;
