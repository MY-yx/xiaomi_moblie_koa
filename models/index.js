const api = require('../config/config').api,
  Model = require('../lib/model');

class IndexModel extends Model {
  getXiaomiDatas(options) {
    const swiper = options.swiper,
      phone = options.phone,
      field = options.field,
      url = `${api.getXiaomiDatas}?swiper=${swiper}&phone=${phone}&field=${field}`;

      return this.get(url, {
        success (res) {
          return res;
        },
  
        error (error) {
          throw new Error('Error: ' + error);
        }
      });
  }
}

module.exports = new IndexModel();