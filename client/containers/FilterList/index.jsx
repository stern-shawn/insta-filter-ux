import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

class FilterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flickity: {},
    };
  }

  componentDidMount = () => {
    // Initialize Flickity on mount and save a reference to it
    const flickityInstance = new Flickity(this.filterList, {
      cellAlign: 'center',
      contain: true,
      initialIndex: 0,
      pageDots: false,
      setGallerySize: true,
      prevNextButtons: false,
    });

    this.setState({
      flickity: flickityInstance,
    });
  }

  // When we select a filter, enable it and tell Flickity to scroll to that filter
  setFilter = (index) => {
    // If the user is clicking the currently selected filter, count as a double-click to set
    // filter strength!
    if (index === this.props.selectedFilter) {
      this.props.showFilterStrength();
    }

    this.props.selectFilter(index);
    this.state.flickity.select(index);
  }

  render = () => {
    const {
      filters,
      photo,
      selectedFilter,
    } = this.props;

    // Return a wrapper div containing a generated list of preview tiles for each filter option,
    // the selected filter will have conditional styling applied to show emphasis
    return (
      <div className="pa3" ref={(el) => { this.filterList = el; }}>
        {filters.map((filter, index) => {
          const filterClass = classNames(
            'tc',
            'dib',
            'mr3',
            `${styles.filter}`,
            {
              [styles['is-selected']]: index === selectedFilter,
            }
          );

          return (
            <div className={`tc dib mr3 ${styles.filter}`} key={index} onClick={() => this.setFilter(index)}>
              <h4 className={filterClass}>{filter.displayName}</h4>
              <div className={`${filter.className} ${styles.filterPreview} aspect-ratio aspect-ratio--1x1`}>
                <div className="aspect-ratio--object cover" style={{ backgroundImage: `url(${photo})` }} />
              </div>
            </div>);
        })}
      </div>
    );
  }
}

FilterList.propTypes = {
  filters: PropTypes.array.isRequired,
  photo: PropTypes.string.isRequired,
  selectFilter: PropTypes.func.isRequired,
  selectedFilter: PropTypes.number.isRequired,
  showFilterStrength: PropTypes.func.isRequired,
};

export default FilterList;
