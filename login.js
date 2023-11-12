function personalLogin(event) {
    event.preventDefault();
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        //HANDELING ERRORS
        console.log("Error signing in,", error.message);
        document.getElementById("errorMessage").innerHTML = error.message;
        document.getElementById("errorMessage").style.color = "red";
        setTimeout(function () {
          document.getElementById("errorMessage").innerHTML = "";
        }, 3000);
      })
      .then(function (user) {
        if (user != null) {
          window.location = "userDashboard.html";
        }
      });
  }
  
  function logOut() {
    firebase.auth().signOut()
      .then(function () {
        window.location = "index.html"; 
      })
      .catch(function (error) {
       
      });
  }
  