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

require(['jquery','bxslider','backTop','nav','libs/fixednav'], function($,bxSlider,backTop,nav,fnav){
     //右下角标签
     new backTop.BackTop($('#backTop'),{
        mode:'move'
    });
     //头部nav
     nav.dropMenu('.drop-menu-effect');
     //滑动固定菜单
    fnav.fiexed('#subNav');
     
  

	/**四边形**/
	var hyx_a = $('.hyx_nav a');
	setInterval(function(){
		var i = parseInt(hyx_a.length * Math.random());
		hyx_a.each(function(index,element){
			$(this).removeClass('active');
		})
		$(hyx_a[i]).addClass('active');
		//
	},2000);

         
         function offset(ele){//计算任意DOM元素距离文档的左或上的绝对偏移
            var l=ele.offsetLeft;
            var t=ele.offsetTop;
            var p=ele.offsetParent;
            while(p){
                if(window.navigator.userAgent.indexOf("MSIE 8")>-1){
                    l+=p.offsetLeft;//加上上一级的边框
                    t+=p.offsetTop;
                }else{
                    l+=p.offsetLeft+p.clientLeft;//加上上一级的边框
                    t+=p.offsetTop+p.clientTop;
                }
                p=p.offsetParent;
            }
            return {left:l,top:t}

        }
        var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
		var ele=document.getElementById("jyImg");
		var ele1=document.getElementById("fwImg");
		var ele2=document.getElementById("qdImg");
		window.onscroll=function(){
            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            /*console.log(offset(ele).top+":")
                console.log(scrollTop+clientHeight)*/

            if(offset(ele).top+100<scrollTop+clientHeight){
                $("#jy_content .h-box").addClass("animatedShow")
                //console.log('ok');
            }
            if(offset(ele).top>scrollTop+clientHeight){
                $("#jy_content .h-box").removeClass("animatedShow")
            }

            if(offset(ele1).top+100<scrollTop+clientHeight){
                $("#fw_content .h-box").addClass("animatedShow")
                //console.log('ok');
            }
            if(offset(ele1).top>scrollTop+clientHeight){
                $("#fw_content .h-box").removeClass("animatedShow")
            }

            if(offset(ele2).top+100<scrollTop+clientHeight){
                $("#qd_content .h-box").addClass("animatedShow")
                //console.log('ok');
            }
            if(offset(ele2).top>scrollTop+clientHeight){
                $("#qd_content .h-box").removeClass("animatedShow")
            }
        }

})