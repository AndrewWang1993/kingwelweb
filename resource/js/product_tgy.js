require.config({
    baseUrl: '../../resource/js',
    shim:{
    	bxslider:['jquery']
    },
    paths: {
        jquery: 'libs/jquery.min',
        bxslider:'libs/jquery.bxslider'
    }
});

require(['jquery','backTop'], function($,backTop){
     new backTop.BackTop($('#backTop'),{
        mode:'move'
    });	
 });