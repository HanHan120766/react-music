
import React, { Component } from 'react';
import './../../scss/Discover/discover.scss';
import { inject, observer } from 'mobx-react';
import Banner from './banner';

@inject('discoverStore')
@observer
class Discover extends Component {
  componentWillMount () {
    const { getbannerListData } = this.props.discoverStore;
    getbannerListData();
  }
  render() {
    const { bannerList } = this.props.discoverStore
    return (
      <div className="Discover">
        <Banner banners={bannerList}></Banner>
      </div>
    );
  }
}

export default Discover;