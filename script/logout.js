  $(document).ready(function () {
var logoutTime = 60 * 30;
var logoutTimeout;
function setLogoutTimeout() {
  clearTimeout(logoutTimeout);
  logoutTimeout = setTimeout(function () {
    logout();
  }, logoutTime * 1000);
}
$(document).on("click keydown mousemove", function () {
  setLogoutTimeout();
});
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
  localStorage.removeItem("user_id");
  $("#login-item").show();
  $("#signup-item").show();
  $("#logout-btn").hide();
  $("#welcome-msg").hide();
}
setLogoutTimeout();

$("#logout-btn").click(function () {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
  localStorage.removeItem("user_id");

  $("#login-item").show();
  $("#signup-item").show();
  $("#logout-btn").hide();
  $("#welcome-msg").hide();
  clearTimeout(logoutTimeout);
});
  });