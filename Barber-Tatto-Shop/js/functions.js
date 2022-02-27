(function($){
    $(function(){

        $('#menuJs').click(function() {
            $('#menuUlJs').slideToggle({});
        });

        // Gallery

    var gallery = $('#gallery'),
    overlay = $('<div/>', { id: 'overlay' });
    overlay.appendTo('body').hide();


    gallery.find('a').on('click', function(event){

        var href = $(this).attr('href'),
            image = $('<img>', { src: href });

        overlay.html( image ) 
            .fadeIn();
        
        event.preventDefault();
    });

    overlay.on('click', function(){
        overlay.fadeOut();
    });

    $(document).on('keyup', function(event){
        if ( event.which === 27 ) overlay.hide();
    });

    });
})(jQuery);