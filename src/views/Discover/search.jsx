import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './../../scss/Discover/search.scss';

@observer
class Search extends Component {
  constructor (props,context) {
    super(props, context)
    
    this.state = {

    }
  }

  componentDidMount () {
  }
  render() {
    var { searchHot } = this.props;
    return (
      <div className="Search">
        <div className="audioSearch iconfont icon-paihang"></div>
        <div className="searchInput">
          <span className="iconfont icon-search "></span>
          <span>{searchHot}</span>
        </div>
        <div className="audioSearch iconfont icon-paihang"></div>
      </div>
    );
  }
}

export default Search;