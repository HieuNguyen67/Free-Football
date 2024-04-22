$(document).ready(function () {
    if (localStorage.getItem("loggedIn") === "true") {
      $("#login-item").hide();
      $("#signup-item").hide();

      $("#logout-btn").show();
      $("#welcome-msg").show();
      $("#username-display").text(localStorage.getItem("username"));
    }
});
