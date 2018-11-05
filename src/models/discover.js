
import { observable, action } from 'mobx';
import discoverApi from './../api/discover';

class DiscoverStore {
  @observable bannerList;
  constructor() {
    this.bannerList = []
  }

  @action
  bannerListData = banner => {
    this.bannerList = banner
  }

  getbannerListData = async () => {
    const banner = await discoverApi.getBannerData();
    this.bannerListData(banner);
  }
}

export default new DiscoverStore();