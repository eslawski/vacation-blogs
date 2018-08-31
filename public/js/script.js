$(function() {
    initializePage();


});

function initializePage() {
    enhanceImages();
    changeSidebar();
    preloadHeroImages();
    initializeBlogImageClicks();
    initializeMobileMenu();
    loadDeferredImages();

}

/**
 * On the homepage behind the scenes I preload all the hero images so they are in the cache
 * and ready to go when the user clicks on a post.
 */
function preloadHeroImages(){
    $('.post-entry-image').each(function(index, element) {
        var heroImagePath = $(element).data("heroImageSrc");
        if(heroImagePath) {
            var img = new Image();
            img.src = heroImagePath;
        }
    });
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
                $element.css('background-image', 'url(' + sharpenedImagePath + ')');
                $element.addClass('enhanced');
            };
            img.src = sharpenedImagePath;
        }
    });
}