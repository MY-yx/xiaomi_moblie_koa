import '../scss/common.scss';
import '../scss/iconfont.css';
import '../scss/carousel.scss';
import '../scss/header.scss';
import '../scss/home_title.scss';
import '../scss/list_board.scss';
import '../scss/footer.scss';

import HeaderNav from '../modules/HeaderNav';


;(async ($) => {
  const phonedata = JSON.parse($('#J_phoneData').html()),
    fielddata = JSON.parse($('#J_fieldData').html()),
    swiperdata = JSON.parse($('#J_swiperData').html());

  const init = () => {
    new HeaderNav(phonedata);
  }

  init();
})(jQuery);