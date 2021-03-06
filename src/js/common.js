/**
 * 公用 脚本
 * */

window.Page = {
  // 兼容的最低IE版本
  supportIEVersion: 10,

  // 获取浏览器信息
  ua: navigator.userAgent.toLowerCase(),

  // 判断是否为IE浏览器
  isIE: function() {
    return this.ua.indexOf('msie') > -1;
  },

  // 判断当前浏览器是否为不受支持的浏览器
  isNotSupportIE: function() {
    return this.ua.match(/msie ([\d.]+)/) && this.ua.match(/msie ([\d.]+)/)[1] < this.supportIEVersion;
  },

  // 滚动延时器
  scrollTimer: null,

  // 页头、页脚初始化
  init: function() {
    $.getJSON('lango19/data/common.json?' + Date.now(), function(response) {
      var _json = response['common'];
      var _hrefIndex = +g_hrefIndex || 0;
      var _indexHrefList = _json['indexHrefList'];
      var _campusHrefList = _json['campusHrefList'];
      var _hrefPrefixList = _json['hrefPrefixList'];
      var _hrefSuffixList = _json['hrefSuffixList'];
      var _data = _json['dataList'];

      // 初始化页头
      var _headerItem = null;

      for (var _hIndex = 0; _hIndex < 6; _hIndex++) {
        // 0 ~ 5 为页头内容
        _headerItem = _data[_hIndex];

        $('#header_' + _hIndex).html(_headerItem['content'])
          .attr('href', _headerItem['url'] ?
            (_hrefPrefixList[_hrefIndex] + _headerItem['url'] + _hrefSuffixList[_hrefIndex]) :
            _indexHrefList[_hrefIndex]);
        $('#logo').parent('.header-logo').attr('href', _indexHrefList[_hrefIndex]);
      }

      // 初始化联系信息
      var _contactItem = null;

      for (var _cIndex = 0; _cIndex < 2; _cIndex++) {
        // 6 ~ 7 为联系信息
        _contactItem = _data[6 + _cIndex];

        $('#contact_title_' + _cIndex).html(_contactItem['title']);
        $('#contact_cont_' + _cIndex).html(_contactItem['content']);
      }

      // 初始化页脚
      var _footerItem = null;

      for (var _fIndex = 0; _fIndex < 3; _fIndex++) {
        // 8 ~ 10 为页脚内容
        _footerItem = _data[8 + _fIndex];

        $('#footer_' + _fIndex).html(_footerItem['content'])
          .attr('href', _footerItem['url'] || _indexHrefList[_hrefIndex]);
      }

      // lango-tech.cn 备案处理
      if (/lango-tech\.cn/.test(window.location.host)) {
        $('body').addClass('for-filing');
        $('#header_4').text('公司新闻');
      }
    });
  }
};

/********************************************* 以上声明，以下调用 *********************************************/

Page.init();

// 显示滚回顶部图标
$(window).scroll(function() {
  if (!Page.scrollTimer) {
    Page.scrollTimer = setTimeout(function() {
      if ($(window).scrollTop() > 0) {
        $('#toTop').addClass('to-top-show');
      } else {
        $('#toTop').removeClass('to-top-show');
      }

      clearTimeout(Page.scrollTimer);
      Page.scrollTimer = null;
    }, 250);
  }
});
