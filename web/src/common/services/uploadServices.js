import React, { Component } from 'react';
import UploadFile from '../../components/upload-file';

class uploadServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: '',
    };
    this.change = this.change.bind(this);
  }

  change(ev) {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imgs: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    const { imgs } = this.state;
    return (
      <div>
        <UploadFile changeFile={this.change} imgs={imgs} />
      </div>
    );
  }
}

export default uploadServices;
