/**
 * @Author   KENFO
 * @DateTime 2015-07-31T15:17:26+0800
 * @param    {[type]}
 * @return   {[type]}
 *
 * 设置滚动固定菜单
 */
define(['jquery'],function($){
	function fixed(el){
		var mt = $(el).offset().top;
		
		//初始状态
		$(window).load(function(){
			var t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t > mt) {
                $(el).addClass('fixed_menu');
            }else {
            	 $(el).removeClass('fixed_menu');
            }
		});
		//滚动状态
		$(window).scroll(function(){
			var t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t > mt) {
                $(el).addClass('fixed_menu');
            }else {
            	 $(el).removeClass('fixed_menu');
            }
            
		});
	}

	return {
		fiexed:fixed
	}
});