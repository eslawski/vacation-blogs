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

function heroImageTesting() {
    var img = new Image();
    img.onload = function() {
        debugger;
    };
    img.src = "/public/images/01/hero_image.jpg";
}

function initializePage() {
    // loadDeferredImages();

    changeSidebar();
    initializeBlogImageClicks();
    initializeMobileMenu();
}

function changeSidebar() {
    setTimeout(function() {
        $('.sidebar-image.active').addClass('make-visible');
    }, 500);
}

function loadDeferredImages() {
    $(document).ready(function(){
        $(".blog-image").each(function(index, element){
            $(element).attr("src", $(element).attr("data-src"));
        });
    });
}

function initializeBlogImageClicks() {
    $('body').removeClass('modal-opened');
    $('.blog-image').click(function(event) {
        var loader = $('<div class="loader"></div>');
        var imageComponent = $(event.target);
        imageComponent.parent().append(loader);
        var highResImagePath = imageComponent.attr('src').replace('low_res', 'high_res');
        $('.modal-image').attr('src', highResImagePath).on('load', function () {
            loader.remove();
            $("#image-modal").addClass("showing");
            $('body').addClass('modal-opened');
        });
        $('.modal-caption').html($(event.target).data("caption"));
    });

    $('#image-modal').click(function(event) {
        if(event.target.id === "image-modal") {
            $('#image-modal').removeClass("showing");
            $('body').removeClass('modal-opened');
            $('.modal-caption').html("");

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