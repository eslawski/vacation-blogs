$(function() {

    // 1.
    var $wrap = $( "#wrap" );

// 2.
    $wrap.on( "click", ".page-link", function( event ) {
        console.log("doing a thing");

        // 3.
        event.preventDefault();

        // 4.
        if ( window.location === this.href ) {
            return;
        }

        // // 5.
        // var pageTitle = ( this.title ) ? this.title : this.textContent;
        // pageTitle = ( this.getAttribute( "rel" ) === "home" ) ? pageTitle : pageTitle + " â€” Acme";

        // 6.
        History.pushState( null, "winning", this.href );
    } );


    // 1.
    History.Adapter.bind( window, "statechange", function() {

        // 2.
        var state = History.getState();

        // 3.
        $.get( state.url, function( res ) {

            // 4.
            $.each( $( res ), function( index, elem ) {
                if ( $wrap.selector !== "#" + elem.id ) {
                    return;
                }
                $wrap.html( $( elem ).html() );
            } );

        } );
    } );

    // Setup blog image clicks
    $('.blog-image').click(function(event) {
       $("#image-modal").addClass("showing");
        $('.modal-content').attr('src', event.target.src)
    });

    $('#image-modal').click(function(event) {
        if(event.target.id === "image-modal") {
            $('#image-modal').removeClass("showing");
        }
    });

    // Menu toggle
    $('.mobile-menu-toggle').click(function() {
        $('body').toggleClass("menu-open");
    });

    // Menu toggle
    $('.menu-item').click(function() {
        $('body').toggleClass("menu-open");
    });
});