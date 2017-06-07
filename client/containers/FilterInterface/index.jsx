import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

import FilterHeader from '../../components/FilterHeader';
import PhotoPreview from '../../components/PhotoPreview';
import FilterList from '../FilterList';
import StrengthSlider from '../StrengthSlider';

class FilterInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: this.generateFilters(),
      selectedFilter: 0,
      showingFilterStrength: false,
    };
  }

  // Adjust the intensity of the currently selected filter
  setFilterStrength = (strength) => {
    const newStrength = this.state.filters;
    // Update value
    newStrength[this.state.selectedFilter].strength = strength;

    // Merge into current state
    this.setState({
      filters: newStrength,
    });
  }

  hideFilterStrength = () => {
    this.setState({
      showingFilterStrength: false,
    });
  }

  showFilterStrength = () => {
    this.setState({
      showingFilterStrength: true,
    });
  }

  // Reset filters to default strengths
  resetFilters = () => {
    this.setState({
      filters: this.generateFilters(),
    });
  }

  // Enable the filter at the given index
  selectFilter = (index) => {
    this.setState({
      selectedFilter: index,
    });
  }

  // Reset the app 'state' to no photo and the default filter
  resetPhoto = () => {
    this.props.setPhoto('');
    this.selectFilter(0);
    this.resetFilters();
  };

  generateFilters = () => [
    { displayName: '1977', className: '_1977', strength: 100 },
    { displayName: 'Aden', className: 'aden', strength: 100 },
    { displayName: 'Brannan', className: 'brannan', strength: 100 },
    { displayName: 'Brooklyn', className: 'brooklyn', strength: 100 },
    { displayName: 'Clarendon', className: 'clarendon', strength: 100 },
    { displayName: 'Earlybird', className: 'earlybird', strength: 100 },
    { displayName: 'Gingham', className: 'gingham', strength: 100 },
    { displayName: 'Hudson', className: 'hudson', strength: 100 },
    { displayName: 'Inkwell', className: 'inkwell', strength: 100 },
    { displayName: 'Kelvin', className: 'kelvin', strength: 100 },
    { displayName: 'Lark', className: 'lark', strength: 100 },
    { displayName: 'Lo-Fi', className: 'lofi', strength: 100 },
    { displayName: 'Maven', className: 'maven', strength: 100 },
    { displayName: 'Mayfair', className: 'mayfair', strength: 100 },
    { displayName: 'Moon', className: 'moon', strength: 100 },
    { displayName: 'Nashville', className: 'nashville', strength: 100 },
    { displayName: 'Perpetua', className: 'perpetua', strength: 100 },
    { displayName: 'Reyes', className: 'reyes', strength: 100 },
    { displayName: 'Rise', className: 'rise', strength: 100 },
    { displayName: 'Slumber', className: 'slumber', strength: 100 },
    { displayName: 'Stinson', className: 'stinson', strength: 100 },
    { displayName: 'Toaster', className: 'toaster', strength: 100 },
    { displayName: 'Valencia', className: 'valencia', strength: 100 },
    { displayName: 'Walden', className: 'walden', strength: 100 },
    { displayName: 'Willow', className: 'willow', strength: 100 },
    { displayName: 'X-pro II', className: 'xpro2', strength: 100 },
  ];

  render = () => (
    <main className={`${styles.filterArea} flex flex-column h-100`}>
      <FilterHeader resetPhoto={this.resetPhoto} />
      <PhotoPreview
        filter={this.state.filters[this.state.selectedFilter]}
        photo={this.props.photo}
      />
      {!this.state.showingFilterStrength ?
        <FilterList
          filters={this.state.filters}
          photo={this.props.photo}
          selectFilter={this.selectFilter}
          selectedFilter={this.state.selectedFilter}
          showFilterStrength={this.showFilterStrength}
        />
        : <StrengthSlider
          currentFilter={this.state.filters[this.state.selectedFilter]}
          hideFilterStrength={this.hideFilterStrength}
          setFilterStrength={this.setFilterStrength}
        />
      }
    </main>
  );
}

FilterInterface.propTypes = {
  photo: PropTypes.string.isRequired,
  setPhoto: PropTypes.func.isRequired,
};

export default FilterInterface;
