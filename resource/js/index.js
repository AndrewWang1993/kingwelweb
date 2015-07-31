/**
 * Created by Administrator on 2015-7-30.
 */
$(document).ready(function(){

    $(".index_focus").hover(function(){
        $(this).find(".index_focus_pre,.index_focus_next").stop(true, true).fadeTo("show", 1)
    },function(){
        $(this).find(".index_focus_pre,.index_focus_next").fadeOut()
    });

    $(".index_focus").slide({
        titCell: ".slide_nav a ",
        mainCell: ".bd ul",
        delayTime: 500,
        interTime: 3500,
        prevCell:".index_focus_pre",
        nextCell:".index_focus_next",
        effect: "fold",
        autoPlay: true,
        trigger: "click",
        startFun:function(i){
            $(".index_focus_info").eq(i).find("h3").css("display","block").fadeTo(1000,1);
            $(".index_focus_info").eq(i).find(".text").css("display","block").fadeTo(1000,1);
        }
    });

});
$(".mr_frbox").slide({
    titCell:"",
    mainCell:".mr_frUl ul",
    autoPage:true,
    effect:"leftLoop",
    autoPlay:true,
    vis:6
});

$(function(){
 $(".li_hover1").hover(function(){
     $(this).css("background-color","#7ecef4");
     $(".li_hover1 a div").css("background","url(../../resource/images/index/02_03.png) no-repeat center");
     $(".li_hover1 a h3").css({"color":"#FFFFFF","border-bottom":"1px solid #FFFFFF"});
     $(".li_hover1 a p").css("color","#FFFFFF");
 },function(){
     $(this).css("background-color","#FFFFFF");
     $(".li_hover1 a div").css("background","url(../../resource/images/index/01_18.png) no-repeat center");
     $(".li_hover1 a h3").css({"color":"#7ecef4","border-bottom":"1px solid #7ecef4"});
     $(".li_hover1 a p").css("color","#333");
 });
    $(".li_hover2").hover(function(){
        $(this).css("background-color","#7ecef4");
        $(".li_hover2 a div").css("background","url(../../resource/images/index/02_05.png) no-repeat center");
        $(".li_hover2 a h3").css({"color":"#FFFFFF","border-bottom":"1px solid #FFFFFF"});
        $(".li_hover2 a p").css("color","#FFFFFF");
    },function(){
        $(this).css("background-color","#FFFFFF");
        $(".li_hover2 a div").css("background","url(../../resource/images/index/01_20.png) no-repeat center");
        $(".li_hover2 a h3").css({"color":"#7ecef4","border-bottom":"1px solid #7ecef4"});
        $(".li_hover2 a p").css("color","#333");
    });
    $(".li_hover3").hover(function(){
        $(this).css("background-color","#7ecef4");
        $(".li_hover3 a div").css("background","url(../../resource/images/index/02_07.png) no-repeat center");
        $(".li_hover3 a h3").css({"color":"#FFFFFF","border-bottom":"1px solid #FFFFFF"});
        $(".li_hover3 a p").css("color","#FFFFFF");
    },function(){
        $(this).css("background-color","#FFFFFF");
        $(".li_hover3 a div").css("background","url(../../resource/images/index/01_22.png) no-repeat center");
        $(".li_hover3 a h3").css({"color":"#7ecef4","border-bottom":"1px solid #7ecef4"});
        $(".li_hover3 a p").css("color","#333");
    });
    $(".li_hover4").hover(function(){
        $(this).css("background-color","#7ecef4");
        $(".li_hover4 a div").css("background","url(../../resource/images/index/02_09.png) no-repeat center");
        $(".li_hover4 a h3").css({"color":"#FFFFFF","border-bottom":"1px solid #FFFFFF"});
        $(".li_hover4 a p").css("color","#FFFFFF");
    },function(){
        $(this).css("background-color","#FFFFFF");
        $(".li_hover4 a div").css("background","url(../../resource/images/index/01_24.png) no-repeat center");
        $(".li_hover4 a h3").css({"color":"#7ecef4","border-bottom":"1px solid #7ecef4"});
        $(".li_hover4 a p").css("color","#333");
    });

    /*Ê×Ò³QA*/
    $(".index_qa li .question").click(function(){
        $(".index_qa li .answer").hide();
        $(this).next().show();
    });
});