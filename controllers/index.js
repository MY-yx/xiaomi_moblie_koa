/**
 * 控制器集和
 */

class IndexController {
  constructor() {}

  async index(ctx, next) {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
  }
};

module.exports = new IndexController();