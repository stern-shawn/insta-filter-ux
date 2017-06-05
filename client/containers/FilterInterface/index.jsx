import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterHeader from '../../components/FilterHeader';
import PhotoPreview from '../../components/PhotoPreview';
import FilterList from '../../components/FilterList';

class FilterInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: this.generateFilters(),
      selectedFilter: 0,
    };
  }

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

  selectFilter = (index) => {
    this.setState({
      selectedFilter: index,
    });
  }

  render = () => (
    <main className="flex flex-column h-100">
      <FilterHeader setPhoto={this.props.setPhoto} />
      <PhotoPreview
        filter={this.state.filters[this.state.selectedFilter]}
        photo={this.props.photo}
      />
      <FilterList
        filters={this.state.filters}
        photo={this.props.photo}
        selectFilter={this.selectFilter}
        selectedFilter={this.state.selectedFilter}
      />
    </main>
  );
}

FilterInterface.propTypes = {
  photo: PropTypes.string.isRequired,
  setPhoto: PropTypes.func.isRequired,
};

export default FilterInterface;
