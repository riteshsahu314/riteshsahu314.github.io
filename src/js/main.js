try {
  window.$ = window.jQuery = require("jquery");

  require("venobox");
} catch (e) {}

$(document).ready(function() {
  $(".venobox").venobox({
    infinigall: true // default: false
  });

  $(".js--contact-me").venobox({
    framewidth: "700px"
  });

  $(".js--modal-image-upvote").venobox({
    framewidth: "80%", // default: ''
    numeratio: true, // default: false
    infinigall: true // default: false
  });

  $(".js--modal-image-foodspint").venobox({
    // framewidth: "80%", // default: ''
    numeratio: true, // default: false
    infinigall: true // default: false
  });
});
