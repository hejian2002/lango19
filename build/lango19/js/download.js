$(function(){window.Page&&(window.Page.initMain=function(){$.getJSON("lango19/data/download.json?"+Date.now(),function(o){var a=o.data,n="",i=null;0<a.length&&(window.Page.downloadMap=a,$.each(a,function(o,d){1===d.show&&(n+="<dt>"+d.title+"</dt>",0<d.subList.length&&$.each(d.subList,function(o,a){1===a.show&&(n+='<dd><a id="f_'+d.id+"_"+a.subId+'" class="'+(i?"":"active")+'" href="javascript:Page.switchDownload(\''+d.id+"', '"+a.subId+"');\">"+a.title+"</a></dd>",i=i||{id:d.id,subId:a.subId})}))}),i&&window.Page.switchDownload(i.id,i.subId)),$("#downloadBar").html(n)})},window.Page.switchDownload=function(o,a){if(o&&a&&window.Page.downloadMap&&window.Page.downloadMap[o]&&window.Page.downloadMap[o].subList[a]){var d=window.Page.downloadMap[o].subList[a],n="";$.each(d.linkList,function(o,a){1===a.show&&(n+='<li class="flex-hb-vc"><div><p class="download-list-name">'+a.name+'</p><p class="download-list-sub">'+a.sub+'</p></div><a class="download-list-link" href="'+a.href+'" target="_blank">'+a.download+"</a></li>")}),$("#downloadBar").find("a.active").removeClass("active").end().find("#f_"+o+"_"+a).addClass("active"),$("#downloadTitle").html(d.title),$("#downloadExplain").html(d.explain),$("#downloadList").html(n)}},window.Page.initMain(),$("#content").scroll(function(){window.Page.scrollTimer||(window.Page.scrollTimer=setTimeout(function(){0<$("#content").scrollTop()?$("#toTop").addClass("to-top-show"):$("#toTop").removeClass("to-top-show"),clearTimeout(window.Page.scrollTimer),window.Page.scrollTimer=null},250))}))});