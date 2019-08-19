try {
    
    window.$ = window.jQuery = require('jquery');

    require('venobox');
} catch (e) {}

$(document).ready(function(){

    $('.venobox').venobox();
    
    $('.js--contact-me').venobox({
        framewidth: '700px'
    });

});

require("../images/RiteshSahu.png");