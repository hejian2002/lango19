$.extend(!0,window.Page||(window.Page={}),{isMobile:/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent),initMain:function(){$.getJSON("lango19/data/home.json?"+Date.now(),function(t){var e=t.home.dataList,o=e[0],n="";$.each(o.contentList,function(t,e){n+="<h3>"+e.subTitle+"</h3><p>"+e.subContent+"</p>"}),$("#home_p1_title").html(o.title),$("#home_p1_cont").empty().append(n);var i=e[1];$("#home_p2_title").html(i.title),$("#home_p2_cont").html(i.content);var a=e[2];$("#home_p3_title").html(a.title),$("#home_p3_cont").html(a.content);var p=e[3],h="";$.each(p.contentList,function(t,e){h+='<div class="home-p4-cont"><h3>'+e.subTitle+"</h3><p>"+e.subContent+"</p></div>"}),$("#home_p4_title").html(p.title),$("#home_p4_contbox").empty().append(h);var s=e[4],l="";$.each(s.contentList,function(t,e){l+="<h3>"+e.subTitle+"</h3><p>"+e.subContent+"</p>"}),$("#home_p5_title").html(s.title),$("#home_p5_cont").empty().append(l)})}}),$("#homeBanner").slick({infinite:!0,dots:!0,autoplay:!0,arrows:!1,autoplaySpeed:4e3,touchThreshold:100,pauseOnHover:!1}),Page.initMain(),Page.isIE()&&Page.isNotSupportIE()?alert("系统检测到您正在使用IE"+Page.supportIEVersion+"以下内核的浏览器，不能实现完美体验，请更换或升级浏览器访问！"):new WOW({offset:100}).init(),$(window).scroll(function(){$("#home_p4_bg").css({"background-position-y":($("#home_p4_bg").offset().top-$(window).scrollTop()-1e3)/(Page.isMobile?4:7)})});