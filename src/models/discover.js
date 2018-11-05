
import { observable, action } from 'mobx';
import discoverApi from './../api/discover';

class DiscoverStore {
  @observable bannerList;
  @observable searchHot;
  constructor() {
    this.bannerList = [];
    this.searchHot = '';
  }

  @action
  bannerListData = banner => {
    this.bannerList = banner
  }
  @action
  searchHotData = searchKey => {
    this.searchHot = searchKey
  }

  getbannerListData = async () => {
    const banner = await discoverApi.getBannerData();
    this.bannerListData(banner);
  }
  getSearchSuggestData = async () => {
    const searchKey = await discoverApi.searchSuggest();
    this.searchHotData(searchKey[0].first);
  }
}

export default new DiscoverStore();