window.Page={supportIEVersion:10,ua:navigator.userAgent.toLowerCase(),isIE:function(){return-1<this.ua.indexOf("msie")},isNotSupportIE:function(){return this.ua.match(/msie ([\d.]+)/)&&this.ua.match(/msie ([\d.]+)/)[1]<this.supportIEVersion},scrollTimer:null,init:function(){$.getJSON("lango19/data/common.json?"+Date.now(),function(t){for(var o=t.common,e=+g_hrefIndex||0,r=o.indexHrefList,n=(o.campusHrefList,o.hrefPrefixList),i=o.hrefSuffixList,l=o.dataList,a=null,s=0;s<6;s++)a=l[s],$("#header_"+s).html(a.content).attr("href",a.url?n[e]+a.url+i[e]:r[e]),$("#logo").parent(".header-logo").attr("href",r[e]);for(var c=null,u=0;u<2;u++)c=l[6+u],$("#contact_title_"+u).html(c.title),$("#contact_cont_"+u).html(c.content);for(var f=null,h=0;h<3;h++)f=l[8+h],$("#footer_"+h).html(f.content).attr("href",f.url||r[e]);/lango-tech\.cn/.test(window.location.host)&&($("body").addClass("for-filing"),$("#header_4").text("公司新闻"))})}},Page.init(),$(window).scroll(function(){Page.scrollTimer||(Page.scrollTimer=setTimeout(function(){0<$(window).scrollTop()?$("#toTop").addClass("to-top-show"):$("#toTop").removeClass("to-top-show"),clearTimeout(Page.scrollTimer),Page.scrollTimer=null},250))});