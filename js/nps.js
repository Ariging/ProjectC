$(document).ready(function(){
    $(".civilbt > button").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });
    $("ul.tabbt > li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });
    $(".snb ul").hover(function() {
        $("li[data-id=" + $(this).attr('id')+"]").toggleClass('on').siblings().removeClass('on');
    });
    $(".sitemap").hide();
    $(".menu").click(function(){
        $(".sitemap").slideDown(700);
    });
    $(".close").click(function(){
        $(".sitemap").slideUp(700);
    })
    $(".snbsub").hide();
    $(".snb span").click(function(){
        $(this).next().slideToggle(300);
        //this 다음 요소를 슬라이드다운
        $(".snb span").not(this).next().slideUp(300);
    });
    if($(window).width() < 641){
        $(".mMenu").click(function(){
            $("nav").slideDown().addClass("on");
            $("nav").addClass("on");
            $(this).toggleClass("on").next().toggleClass("on");
        });
        $(".mClose").click(function(){
            $("nav").slideUp().removeClass("on");
            $(this).toggleClass("on").prev().toggleClass("on");
        });
        $(".mgnb").click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
        });
        $(".snb ul").click(function() {
            $("li[data-id=" + $(this).attr('id')+"]").addClass('on').siblings().removeClass('on');
        });
    }
})
var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });