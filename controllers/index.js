/**
 * 控制器集和
 */
const pageConf = require('../config/config').page_conf;
const indexModel = require('../models/index');

class IndexController {
  constructor() {}

  async index(ctx, next) {
  //   const data = await indexModel.getXiaomiDatas({
  //     swiper: true,
  //     phone: true,
  //     field: true
  //   });


    await ctx.render('index', {
      pageConf: pageConf.index
    })
  }
};

module.exports = new IndexController();