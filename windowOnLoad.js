function OnloadProfile() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigateTo("userDashboard.html");
      } else {
        navigateTo("index.html");
      }
    });
  }
  
function navigateTo(page) {
    window.history.pushState({}, "", page);
}
  
window.onload = OnloadProfile;
  