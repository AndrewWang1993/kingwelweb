/**
 * Created by Administrator on 2015-7-30.
 */
$(function(){
    $(".kwl-news-item1").css("background","#7ecef4 url(../../resource/images/welan/02_03.png) no-repeat 10px 5px");
    $(".kwl-news-item1 a").css("color","#FFFFFF");
    $(".kwl-news-item1").addClass("follows-currrent");

    $(".kwl-news-item1").hover(function(){
        $(this).css("background","#7ecef4 url(../../resource/images/welan/02_03.png) no-repeat 10px 5px");
        $(".kwl-news-item1 a").css("color","#FFFFFF");
    },function(){
        if($(this).hasClass("follows-currrent")){
            return;
        }
        $(this).css("background","#FFFFFF url(../../resource/images/welan/01_05.png) no-repeat 10px 5px");
        $(".kwl-news-item1 a").css("color","#7ecef4");
    });


    $(".kwl-news-item2").hover(function(){
        $(this).css("background","#7ecef4 url(../../resource/images/welan/02_06.png) no-repeat 10px 5px");
        $(".kwl-news-item2 a").css("color","#FFFFFF");
    },function(){
        if($(this).hasClass("follows-currrent")){
            return;
        }
        $(this).css("background","#FFFFFF url(../../resource/images/welan/01_08.png) no-repeat 10px 5px");
        $(".kwl-news-item2 a").css("color","#7ecef4");
    });

    $(".kwl-news-item3").hover(function(){
        $(this).css("background","#7ecef4 url(../../resource/images/welan/02_10.png) no-repeat 10px 5px");
        $(".kwl-news-item3 a").css("color","#FFFFFF");
    },function(){
        if($(this).hasClass("follows-currrent")){
            return;
        }
        $(this).css("background","#FFFFFF url(../../resource/images/welan/01_12.png) no-repeat 10px 5px");
        $(".kwl-news-item3 a").css("color","#7ecef4");
    });

    $(".kwl-news-item4").hover(function(){
        $(this).css("background","#7ecef4 url(../../resource/images/welan/02_14.png) no-repeat 10px 5px");
        $(".kwl-news-item4 a").css("color","#FFFFFF");
    },function(){
        if($(this).hasClass("follows-currrent")){
            return;
        }
        $(this).css("background","#FFFFFF url(../../resource/images/welan/01_16.png) no-repeat 10px 5px");
        $(".kwl-news-item4 a").css("color","#7ecef4");


    });

    /*点击菜单锚点到特定位置*/
    $(".kwl-news-left ul li").click(function(){
        $(".kwl-news-left ul li").each(function(){{
            $(this).removeClass("follows-currrent");
        }});
        var href ="";
        if($(this).hasClass("kwl-news-item1")){
            $(this).css("background","#7ecef4 url(../../resource/images/welan/02_03.png) no-repeat 10px 5px");
            $(".kwl-news-item1 a").css("color","#FFFFFF");
            $(this).addClass("follows-currrent");
            href = "companydetail";
        }else{
            $(".kwl-news-item1").css("background","#FFFFFF url(../../resource/images/welan/01_05.png) no-repeat 10px 5px");
            $(".kwl-news-item1 a").css("color","#7ecef4");
        }
        if($(this).hasClass("kwl-news-item2")){
            $(this).css("background","#7ecef4 url(../../resource/images/welan/02_06.png) no-repeat 10px 5px");
            $(".kwl-news-item2 a").css("color","#FFFFFF");
            $(this).addClass("follows-currrent");
            href = "companywenhual";
        }else{
            $(".kwl-news-item2").css("background","#FFFFFF url(../../resource/images/welan/01_08.png) no-repeat 10px 5px");
            $(".kwl-news-item2 a").css("color","#7ecef4");
        }
        if($(this).hasClass("kwl-news-item3")){
            $(this).css("background","#7ecef4 url(../../resource/images/welan/02_10.png) no-repeat 10px 5px");
            $(".kwl-news-item3 a").css("color","#FFFFFF");
            $(this).addClass("follows-currrent");
            href = "zuzhi";
        }else{
            $(".kwl-news-item3").css("background","#FFFFFF url(../../resource/images/welan/01_12.png) no-repeat 10px 5px");
            $(".kwl-news-item3 a").css("color","#7ecef4");
        }
        if($(this).hasClass("kwl-news-item4")){
            $(this).css("background","#7ecef4 url(../../resource/images/welan/02_14.png) no-repeat 10px 5px");
            $(".kwl-news-item4 a").css("color","#FFFFFF");
            $(this).addClass("follows-currrent");
            href = "yinan";
        }else{
            $(".kwl-news-item4").css("background","#FFFFFF url(../../resource/images/welan/01_16.png) no-repeat 10px 5px");
            $(".kwl-news-item4 a").css("color","#7ecef4");
        }

        var pos = $("#"+href).offset().top;
        $("html,body").animate({scrollTop: pos}, 500);
    });
});
