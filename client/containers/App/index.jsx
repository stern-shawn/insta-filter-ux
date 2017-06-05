import React, { Component } from 'react';

import PhotoPicker from '../../components/PhotoPicker';
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
    <div className="container">
      <div className={styles.frame}>
        {this.state.photo.length === 0
          ? <PhotoPicker styles={styles} setPhoto={this.setPhoto} />
          : <img src={this.state.photo}/>
        }
      </div>
    </div>
  )
}

export default App;
