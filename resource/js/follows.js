/**
 * Created by Administrator on 2015-7-30.
 */
$(function(){
    $(".follows-item1").css("background","#7ecef4 url(../../resource/images/follows/02_03.png) no-repeat 10px 5px");
    $(".follows-item1 a").css("color","#FFFFFF");
    $(".follows-item1").addClass("follows-currrent");

    $(".follows-item1").hover(function(){
        $(this).css("background","#7ecef4 url(../../resource/images/follows/02_03.png) no-repeat 10px 5px");
        $(".follows-item1 a").css("color","#FFFFFF");
    },function(){
        if($(this).hasClass("follows-currrent")){
            return;
        }
        $(this).css("background","#FFFFFF url(../../resource/images/follows/01_05.png) no-repeat 10px 5px");
        $(".follows-item1 a").css("color","#7ecef4");
    });


    $(".follows-item2").hover(function(){
        $(this).css("background","#7ecef4 url(../../resource/images/follows/02_06.png) no-repeat 10px 5px");
        $(".follows-item2 a").css("color","#FFFFFF");
    },function(){
        if($(this).hasClass("follows-currrent")){
            return;
        }
        $(this).css("background","#FFFFFF url(../../resource/images/follows/01_08.png) no-repeat 10px 5px");
        $(".follows-item2 a").css("color","#7ecef4");
    });

    $(".follows-item3").hover(function(){
        $(this).css("background","#7ecef4 url(../../resource/images/follows/02_09.png) no-repeat 10px 5px");
        $(".follows-item3 a").css("color","#FFFFFF");
    },function(){
        if($(this).hasClass("follows-currrent")){
            return;
        }
        $(this).css("background","#FFFFFF url(../../resource/images/follows/01_11.png) no-repeat 10px 5px");
        $(".follows-item3 a").css("color","#7ecef4");
    });

    $(".follows-item4").hover(function(){
        $(this).css("background","#7ecef4 url(../../resource/images/follows/02_11.png) no-repeat 10px 5px");
        $(".follows-item4 a").css("color","#FFFFFF");
    },function(){
        if($(this).hasClass("follows-currrent")){
             return;
        }
        $(this).css("background","#FFFFFF url(../../resource/images/follows/01_13.png) no-repeat 10px 5px");
        $(".follows-item4 a").css("color","#7ecef4");


    });

    $(".follows_qa ul li .question").click(function(){
        $(".follows_qa ul li .answer").hide();
        $(this).next().show();
    });

    /*点击菜单锚点到特定位置*/
    $(".follows-left ul li").click(function(){
            $(".follows-left ul li").each(function(){{
                $(this).removeClass("follows-currrent");
            }});
        var href ="";
            if($(this).hasClass("follows-item1")){
                $(this).css("background","#7ecef4 url(../../resource/images/follows/02_03.png) no-repeat 10px 5px");
                $(".follows-item1 a").css("color","#FFFFFF");
                $(this).addClass("follows-currrent");
                href = "companydetail";
            }else{
                $(".follows-item1").css("background","#FFFFFF url(../../resource/images/follows/01_05.png) no-repeat 10px 5px");
                $(".follows-item1 a").css("color","#7ecef4");
            }
            if($(this).hasClass("follows-item2")){
                $(this).css("background","#7ecef4 url(../../resource/images/follows/02_06.png) no-repeat 10px 5px");
                $(".follows-item2 a").css("color","#FFFFFF");
                $(this).addClass("follows-currrent");
                href = "companywenhual";
            }else{
                $(".follows-item2").css("background","#FFFFFF url(../../resource/images/follows/01_08.png) no-repeat 10px 5px");
                $(".follows-item2 a").css("color","#7ecef4");
            }
            if($(this).hasClass("follows-item3")){
                $(this).css("background","#7ecef4 url(../../resource/images/follows/02_09.png) no-repeat 10px 5px");
                $(".follows-item3 a").css("color","#FFFFFF");
                $(this).addClass("follows-currrent");
                href = "zuzhi";
            }else{
                $(".follows-item3").css("background","#FFFFFF url(../../resource/images/follows/01_11.png) no-repeat 10px 5px");
                $(".follows-item3 a").css("color","#7ecef4");
            }
           if($(this).hasClass("follows-item4")){
                $(this).css("background","#7ecef4 url(../../resource/images/follows/02_11.png) no-repeat 10px 5px");
                $(".follows-item4 a").css("color","#FFFFFF");
                $(this).addClass("follows-currrent");
               href = "yinan";
            }else{
            $(".follows-item4").css("background","#FFFFFF url(../../resource/images/follows/01_13.png) no-repeat 10px 5px");
            $(".follows-item4 a").css("color","#7ecef4");
           }

        var pos = $("#"+href).offset().top;
        $("html,body").animate({scrollTop: pos}, 500);
    });
});