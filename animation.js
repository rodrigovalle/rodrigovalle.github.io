// Using jQuery for animations

$(document).ready(function() {
    $(window).scroll(function() {
        $('html').css('background-position', '15px ' + -($(window).scrollTop()/10-15)%170 + 'px');
    })

    var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 300);
        return false;
    })
})
