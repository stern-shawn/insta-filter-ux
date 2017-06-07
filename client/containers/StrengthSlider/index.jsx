import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class StrengthSlider extends Component {
  componentDidMount() {
    const options = {
      connect: [true, false],
      tooltips: true,
      format: wNumb({
        decimals: 0,
      }),
      start: [this.props.currentFilter.strength],
      step: 1,
      range: {
        min: [0],
        max: [100],
      },
    };

    const slider = noUiSlider.create(this.slider, options);
    // Make sure to use an arrow function here so 'this' context is bound to the class.
    // If we use a classic function(e) {...} we'll need to save a reference to
    // this.props.setFilterStrength since the 'this' inside the anonymous function isn't the same
    // as the 'this' of the class...
    // EX:
    // const updateFilterStrength = this.props.setFilterStrength;
    // slider.on('update', function (e) {
    //   const newStrengthVal = e[0];
    //   updateFilterStrength(newStrengthVal);
    // });

    slider.on('update', (e) => {
      const newStrengthVal = e[0];
      this.props.setFilterStrength(newStrengthVal);
    });
  }

  render = () => (
    <div className="pa5">
      <div ref={(el) => { this.slider = el; }} />
      <div className="mt4 tc">
        <button onClick={this.props.hideFilterStrength} className="fw6 f6 ttu black bn bg-white">Done</button>
      </div>
    </div>
  )
}

StrengthSlider.propTypes = {
  currentFilter: PropTypes.object.isRequired,
  hideFilterStrength: PropTypes.func.isRequired,
  setFilterStrength: PropTypes.func.isRequired,
};

export default StrengthSlider;
