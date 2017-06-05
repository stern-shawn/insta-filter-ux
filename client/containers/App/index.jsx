import React, { Component } from 'react';

import FilterInterface from '../FilterInterface/';
import PhotoPicker from '../../components/PhotoPicker/';
import styles from './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: '',
    };
  }

  // Set displayed photo to the given dataURL
  setPhoto = (photoString) => {
    this.setState({
      photo: photoString,
    });
  }

  render = () => (
    <div className="wrap vh-100 overflow-hidden">
      <div className="phone relative bg-white w-100 h-100">
        {this.state.photo.length === 0
          ? <PhotoPicker setPhoto={this.setPhoto} />
          : <FilterInterface photo={this.state.photo} setPhoto={this.setPhoto} />
        }
      </div>
    </div>
  )
}

export default App;
