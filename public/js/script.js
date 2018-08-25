$(function() {
    initializePage();

    var $wrap = $( "#wrap" );
    $wrap.on( "click", ".page-link", function( event ) {
        event.preventDefault();
        if ( window.location === this.href ) {
            return;
        }
        // Could update the page title here
        History.pushState( null, "", this.href );
    } );

    History.Adapter.bind( window, "statechange", function() {
        var state = History.getState();
        $.get( state.url, function( res ) {
            $.each( $( res ), function( index, elem ) {
                if ( $wrap.selector !== "#" + elem.id ) {
                    return;
                }
                $wrap.html($(elem).html());
                initializePage();
            } );

        } );
    } );
});

function initializePage() {
    initializeBlogImageClicks();
    initializeMobileMenu();
}

function initializeBlogImageClicks() {
    $('.blog-image').click(function(event) {
        $("#image-modal").addClass("showing");
        $('.modal-image').attr('src', event.target.src);
        $('.modal-caption').html($(event.target).data("caption"));
    });

    $('#image-modal').click(function(event) {
        if(event.target.id === "image-modal") {
            $('#image-modal').removeClass("showing");
        }
    });
}

function initializeMobileMenu() {
    // Menu toggle
    $('.mobile-menu-toggle').click(function() {
        $('body').toggleClass("menu-open");
    });

    // Menu toggle
    $('.menu-item').click(function() {
        $('body').toggleClass("menu-open");
    });
}