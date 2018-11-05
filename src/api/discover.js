import api from './resources';

export default {
  getBannerData() {
    return api.get('banner').then(res => res.data.banners)
  }
}
