$(document).ready(function() {
    // START SLIDER
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        captions: true,
        useCSS: false,
        onRedraw: function(viewportDimensions) {
            var viewportHeight = viewportDimensions.height;
            $('#bx-pager').css({
                'min-height': viewportHeight
            });
        }
    });
});
