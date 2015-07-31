requirejs.config({
    urlArgs: "bust=" +  (new Date()).getTime(), //生产环境去掉
    baseUrl: '../../resource/js',
    shim:{ //指定依赖
    	bxslider:['jquery'],
    	affix:['jquery'],
        scrollspy:['jquery']
    },
    paths: {
        jquery: 'libs/jquery.min',
        bxslider:'libs/jquery.bxslider',
        affix:'libs/affix',
        scrollspy:'libs/scrollspy'
    }

});

require(['jquery','nav','affix','scrollspy'], function($,nav,affix,scrollspy){
   //头部nav
   nav.dropMenu('.drop-menu-effect');
   //
   $('.scollspy .snav').affix({
    offset: {
        top: 200, 
        bottom: function () {
          return (this.bottom = $('footer').outerHeight(true))
        }
      }
   });
   $('body').scrollspy();
});