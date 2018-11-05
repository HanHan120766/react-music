
import React, { Component } from 'react';
import './../scss/discover.scss';
import { inject, observer } from 'mobx-react';

@inject('discoverStore')
@observer
class Discover extends Component {
  componentDidMount () {

  }
  render() {
    return (
      <div className="Discover">
      Discover
      </div>
    );
  }
}

export default Discover;