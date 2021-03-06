/**
 * 新闻中心详情
 */

var news = {
  // 详情内容
  dataList: [{
    title: '云计算联合实验室揭牌仪式在广州朗国电子举行',
    des: '2018年8月8号，在这个极具特别意义的日子里，广州朗国电子与华南理工大学软件学院，共同创办的云计算联合实验室的揭牌仪式在广州朗国电子科技有限公司举行。',
    hot: 1,
    id: 0,
    state: 0,
    time: '2019-09-20',
    type: 1,
    url: 'lango19/images/news_0.png'
  }, {
    title: '“互动‘视界’，智享未来”2016朗国科技新品发布会取得圆满成功',
    des: '4月9日，朗国科技携手梦派电子在广州花都举办“互动‘视界’，智享未来——2016年新品上市发布会”。 会上，双方合作推出了智慧酒店互动电视、FHD智能电视、4K智能电视、智能K歌电视、远程控制安卓广告机、教学一体机等多款产品，强势进军商显市场。',
    hot: 1,
    id: 1,
    state: 0,
    time: '2019-09-20',
    type: 1,
    url: 'lango19/images/news_1.png'
  }, {
    title: '广州朗国电子科技有限公司发展经：每一步都离不开软实力',
    des: '调查显示，目前全国IT类网上发布职位已经超过56万个，其中有大约20%~30%的职位发布公司能给出每月万元以上的薪水，一时间IT行业成为求职者跃跃欲试的首选行业。当然，这也从另一方面显示出IT行业人才紧缺。',
    hot: 1,
    id: 2,
    state: 0,
    time: '2019-09-20',
    type: 1,
    url: 'lango19/images/news_2.png'
  }, {
    title: '强强联合||朗国电子引入温氏战略股东，携手推进智慧农业',
    des: '2020年1月5日，广州朗国电子科技有限公司在从化碧水湾举办了公司年会，同时在年会现场举行了温氏战略入股朗国正式签约仪式。朗国电子与温氏投资代表现场签订了投资协议。',
    hot: 1,
    id: 3,
    state: 0,
    time: '2020-1-14',
    type: 1,
    url: 'lango19/images/news_3.png'
  }],

  // 页面初始化
  pageInit: function() {
    try {
      var len = this.dataList.length;

      for (var i = 0; i < len; i++) {
        $('#news_img_' + i).attr('src', this.dataList[i]['url']).attr('alt', this.dataList[i]['title'])
          .parent('.news-imgbox').attr('href', $('#news_img_' + i).parent('.news-imgbox').attr('href') + this.dataList[i][
            'id'
          ]);
        $('#news_title_' + i).html(this.dataList[i]['title']);
        $('#news_des_' + i).html(this.dataList[i]['des']);
      }
    } catch (e) {
      console.log(e);
    }
  }
};

/********************************************* 以上声明，以下调用 *********************************************/

// css hack 360安全浏览器
if ($('#testLi').width() > 382) {
  $(document.body).append('<style type="text/css">.news-items li {margin-right: 1.7%;}</style>');
}

$(function() {
  news.pageInit();
});
