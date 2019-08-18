try {
    
    window.$ = window.jQuery = require('jquery');

    require('venobox');
} catch (e) {}

$(document).ready(function(){
    $('.js--contact-me').venobox({
        framewidth: '700px'
    });

    $('.venobox').venobox();
});