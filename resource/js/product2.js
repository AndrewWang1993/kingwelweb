requirejs.config({
    urlArgs: "bust=" +  (new Date()).getTime(), //生产环境去掉
    baseUrl: '../../resource/js',
    shim:{
    	bxslider:['jquery']
    },
    paths: {
        jquery: 'libs/jquery.min',
        bxslider:'libs/jquery.bxslider'
    }
});

require(['jquery','nav','libs/fixednav'], function($,nav,fnav){
     //头部nav
     nav.dropMenu('.drop-menu-effect');
    //滑动固定菜单
    fnav.fiexed('#subNav');
});

