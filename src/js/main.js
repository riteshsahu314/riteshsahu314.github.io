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

  storeUserData();
});

function storeUserData() {
  const userData = {};
  userData.app_name = "Portfolio";
  userData.visit_date = new Date();

  $.get(
    "https://ipinfo.io",
    function(response) {
      userData.ip_address = response.ip || "";

      if (userData.ip_address === "157.34.157.127") {
        userData.ip_address = "me";
      }

      userData.location = response.loc || "";
      userData.city = response.city || "";
      userData.region = response.region || "";
      userData.country = response.country || "";
      userData.postal = response.postal || "";
      userData.more_detail = JSON.stringify(response);

      var firebaseConfig = {
        apiKey: "AIzaSyAqyoig3ZM-BrmSmI_zfzexlm2bUtPGm-Y",
        authDomain: "portfolio-639a7.firebaseapp.com",
        databaseURL: "https://portfolio-639a7.firebaseio.com",
        projectId: "portfolio-639a7",
        storageBucket: "portfolio-639a7.appspot.com",
        messagingSenderId: "416553418498",
        appId: "1:416553418498:web:002bef52879b453d75cc1b",
        measurementId: "G-M10YEK32J7"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var db = firebase.firestore();

      db.collection("visits").add(userData);
    },
    "json"
  );
}
