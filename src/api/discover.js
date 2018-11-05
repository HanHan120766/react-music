import api from './resources';

export default {
  /**
   * 搜索建议
   */
  searchSuggest() {
    return api.get('search/hot').then(res => res.data.result.hots)
  },
  /**
   * 发现页banner
   */
  getBannerData() {
    return api.get('banner').then(res => res.data.banners)
  }
}
