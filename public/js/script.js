$(function() {
    initializePage();


});

function initializePage() {
    enhanceImages();
    changeSidebar();
    initializeBlogImageClicks();
    initializeMobileMenu();
    loadDeferredImages();

}

function changeSidebar() {
    setTimeout(function() {
        $('.sidebar-image.active').addClass('make-visible');
    }, 500);
}

function loadDeferredImages() {
    $(".blog-image").each(function(index, element){
        $(element).attr("src", $(element).attr("data-src"));
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
        if(!event.target.className.includes("modal-image")) {
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

function enhanceImages() {
    $('.placeholder-image').each(function(index, element) {
        var $element = $(element);
        var sharpenedImagePath = $element.data("highResImagePath");

        if(sharpenedImagePath) {
            var img = new Image();
            img.onload = function() {
                // IMPORTANT: For some reason on localhost setting the background image this way retrieves the
                // background image again and causes this weird flickering. This does not happen on production.
                // probably because of weird caching issues with localhost.
                var currentBackground = $(element).css('background-image');
                $element.css('background-image', currentBackground.replace(/url\([^)]*\)/gi, "url("+sharpenedImagePath+")"));
                $element.addClass('enhanced');
            };
            img.src = sharpenedImagePath;
        }
    });
}