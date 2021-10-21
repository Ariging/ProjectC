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