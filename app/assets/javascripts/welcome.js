$(document).ready(function() {
    // START SLIDER
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        captions: true,
        useCSS: false,
        onRedraw: function(viewportDimensions) {
            var viewportHeight = viewportDimensions.height;
            var pager = $('#bx-pager');
            // we don't want to constrain the height
            var oldWidth = pager.width();
            var newWidth = oldWidth * viewportHeight / pager.height();
            pager.css({
                width: newWidth
            });
        }
    });
});
