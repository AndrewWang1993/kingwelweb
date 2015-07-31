
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