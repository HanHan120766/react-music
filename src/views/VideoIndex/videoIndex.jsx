import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import { route, Link } from 'react-router-dom';
@inject('discoverStore')
@observer
class VideoIndex extends Component {
  componentWillMount () {
    console.log(this.props.discoverStore);
  }
  render() {
    return (
      <div className="VideoIndex">
      video
      </div>
    );
  }
}

export default VideoIndex;