const fetch = require('node-fetch');

class Model {
  get(url, options) {
    return fetch(url)
      .then(res => {
        // 第一层转换为json返回给第二次
        return res.json();
      })
      .then(res => {
        // 将返回的数据返回给正确处理函数
        return options.success(res);
      })
      .catch(err => {
        return options.error(err);
      })
  }
  post(url, options) {
    return fetch(url, {
        method: 'post',
        body: JSON.stringify(options.data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        // 第一层转换为json返回给第二次
        return res.json();
      })
      .then(res => {
        // 将返回的数据返回给正确处理函数
        return options.success(res);
      })
      .catch(err => {
        return options.error(err);
      })
  }
}

module.exports = Model;