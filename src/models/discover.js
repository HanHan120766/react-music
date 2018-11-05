
import { observable, computed, action } from 'mobx';

class DiscoverStore {
  @observable swiperList;
  constructor() {
    this.swiperList = []
  }

  //计算属性
  @action
  swiperListData = data => {
    this.swiperList = data
  }

  getSwiperListData = async () => {
    this.swiperListData([1,2,4]);
  }
}

module.exports = new DiscoverStore();