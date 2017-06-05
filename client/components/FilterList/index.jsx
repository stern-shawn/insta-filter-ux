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

  componentDidMount() {
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

  render() {
    const {
      filters,
      photo,
      selectFilter,
      selectedFilter,
    } = this.props;

    return (
      <div className="pa3" ref={(el) => { this.filterList = el; }}>
        {filters.map((filter, index) => {
          const filterClass = classNames(
            'tc', 'dib', 'mr3', `${styles.filter}`,
            {
              [styles['is-selected']]: index === selectedFilter,
            }
          );

          return (
            <div className={`tc dib mr3 ${styles.filter}`} key={index} onClick={() => selectFilter(index)}>
              <h4 className={filterClass}>{filter.displayName}</h4>
              <div className={`${filter.className} ${styles.filterPreview} aspect-ratio aspect-ratio--1x1`}>
                <div className="aspect-ratio--object cover" style={{ backgroundImage: `url(${photo})` }} />
              </div>
            </div>);
          }
          )
        }
      </div>
    );
  }
}

FilterList.propTypes = {
  filters: PropTypes.array.isRequired,
  photo: PropTypes.string.isRequired,
  selectFilter: PropTypes.func.isRequired,
  selectedFilter: PropTypes.number.isRequired,
};

export default FilterList;
