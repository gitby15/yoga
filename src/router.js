/**
 * Created by timl on 2017/3/10.
 * 本模块用于判断当前页面是哪个页面
 * 还需要什么功能，以后再加
 */
const routerMatcher = {
  'index': /^#!index/,
  'mine': /^#!mine/,
  'detail': /^#!detail/,
  'order': /^#!order/,
  'olist': /^#!olist/,
  'couponlst': /^#!couponlst/,
  'beyond': /^#!beyond/,
  //'phonevalidate': './pages/phonevalidatev1/init', // 这个页面已经废弃
  'address': /^#!address/, // @shuiqin地址列表
  'addrdetail': /^#!addrdetail/, // @shuiqin地址详情
  'license': /^#!license/, // 营业资质页
  'evaluate': /^#!evaluate/, // 评价页面
  'evaluatemy': /^#!evaluatemy/, // 我的评价页
  'poipicker': /^#!poipicker/, // @mengqian收货地址选择页
  'searchresult': /^#!searchresult/,
  'searchoutrange': /^#!searchoutrange/
};

const routes = {
  'index': 0,
  'mine': 1,
  'detail': 2,
  'order': 3,
  'olist': 4,
  'couponlst': 5,
  'beyond': 6,
  'address': 7,
  'addrdetail': 8,
  'license': 9,
  'evaluate': 10,
  'evaluatemy': 11,
  'poipicker': 12,
  'searchresult': 13,
  'searchoutrange': 14
};

module.exports = {
  getCurrentPage: function () {
    for (var key in routerMatcher) {
      if (location.hash.match(routerMatcher[key])) {
        return routes.pages[key];
      }
    }
  },
  pages: routes,
  gotoPoiPicker: function () {
    location.hash = '#!poipicker';
  }


}

