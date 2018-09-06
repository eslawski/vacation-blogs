$(function() {
    enhanceImages();
    changeSidebar();
    initializeBlogImageClicks();
    initializeMobileMenu();
    loadDeferredImages();
});

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

function sendBlogImageClickEvent(imagePath) {
    gtag('event', 'click', {
        'event_category': 'BlogImage',
        'event_label': imagePath
    });
}

function initializeBlogImageClicks() {
    $('body').removeClass('modal-opened');
    $('.blog-image').click(function(event) {
        var imageComponent = $(event.target);
        var imagePath = imageComponent.attr('src');
        var loader = $('<div class="loader"></div>');
        sendBlogImageClickEvent(imagePath);
        imageComponent.parent().append(loader);
        var highResImagePath = imagePath.replace('low_res', 'high_res');
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
    $('.mobile-menu-toggle').click(function() {
        $('body').toggleClass("menu-open");
    });
}

function enhanceImages() {
    $('.progressive-loader').each(function(index, element) {
        var progressiveLoader = $(element);
        var sharpenedImagePath = progressiveLoader.data("highResImagePath");

        if(sharpenedImagePath) {
            var largeImage = new Image();
            largeImage.onload = function() {
                largeImage.classList.add("loaded");
            };
            largeImage.classList.add("large-image");

            if(progressiveLoader.hasClass('fixed')) {
                largeImage.classList.add("force-hero-cover");
            }

            progressiveLoader.append(largeImage);
            largeImage.src = sharpenedImagePath;
        }
    });
}