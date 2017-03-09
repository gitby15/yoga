/**
 * Created by TimLi on 2017/3/8.
 */
var $ = require('jquery');

console.log('--- yoyo wo ai ni ---');
setTimeout(function(){
    console.log('---1 ---');
    console.log($)
    console.log($('.city-list-toggler'))
    console.log('2');
    // var getCurrentPage = function () {
    //     return $('.active');
    // };
    //
    // var currentPage = getCurrentPage();
    // if (currentPage.find('.poi-poiker-main')[0]) {
    //     currentPage.find('.city-list-toggler').click();
    //     currentPage.find('[data-city-name="上海"]').click();
    // }
    $('.city-list-toggler').trigger('click');

    setTimeout(function(){
        $('[data-city-name="上海"]').trigger('click');
    },500);

},6500);