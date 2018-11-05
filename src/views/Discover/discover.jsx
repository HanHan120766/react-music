
import React, { Component } from 'react';
import './../../scss/Discover/discover.scss';
import { inject, observer } from 'mobx-react';
import Banner from './banner';
import Search from './search';

@inject('discoverStore')
@observer
class Discover extends Component {
  componentWillMount () {
    const { getbannerListData, getSearchSuggestData} = this.props.discoverStore;
    getbannerListData();
    getSearchSuggestData();
  }
  render() {
    const { bannerList,searchHot } = this.props.discoverStore
    return (
      <div className="Discover">
        <Search searchHot={searchHot}></Search>
        <Banner banners={bannerList}></Banner>
      </div>
    );
  }
}

export default Discover;