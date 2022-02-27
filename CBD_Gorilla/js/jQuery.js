(function($){
    $(function(){

        $(".why_js").click(function() {
        $("html, body").animate({
            scrollTop: $(".to_why_js").offset().top
        }, 500);
        });

        $(".news_js").click(function() {
        $("html, body").animate({
            scrollTop: $(".to_news_js").offset().top
        }, 700);
        });

        $(".shop_js").click(function() {
        $("html, body").animate({
            scrollTop: $(".to_shop_js").offset().top
        }, 900);
        });

        $(".kontakt_js").click(function() {
        $("html, body").animate({
            scrollTop: $(".to_kontakt_js").offset().top
        }, 1100);
        }); 

    });
})(jQuery);

