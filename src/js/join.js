/**
 * 加入我们 脚本
 * */

$.extend(true, window.Page || (window.Page = {}), {
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
  }
});

/********************************************* 以上声明，以下调用 *********************************************/

if (Page.isIE() && Page.isNotSupportIE()) {
  alert('系统检测到您正在使用IE' + Page.supportIEVersion + '以下内核的浏览器，不能实现完美体验，请更换或升级浏览器访问！');
}

// 初始化滚动展示动画
new WOW().init();