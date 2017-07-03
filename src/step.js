/**
 * Created by timl on 2017/3/10.
 */
let $ = require('jquery');

/**
 * 等待某个元素加载完成
 * 加载完成的标准：
 * 1.这个元素在页面中可见
 * 2.这个元素的某个需要的事件被绑定过了
 *
 */
let waitForElement = function (selector, eventNameList) {
  /**
   * 通过轮询的方式检查元素是否加载
   */
  let elem_display = false;
  let event_load = false;
  let poll_interval = 500;// 500毫秒询问一次

  let poll = setInterval(function () {
    /**
     * 分两个步骤查询
     */

    if (!elem_display) {
      elem_display = !!$(selector)[0]
    }

  }, poll_interval)
};