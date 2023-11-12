function closeProfile(){
    document.getElementById("profileCenter").style.display = "none"
}

function closeNotification(){
    document.getElementById("notificationCenter").style.display = "none"
}

function closeSettings(){
    document.getElementById("settingsCenter").style.display = "none"
}

function closeWhoIsHome(){
    document.getElementById("whoIshomeList").style.display = "none"
}

let incorrectAttempts = 0; // Initialize incorrect password attempts counter

function Unlock() {
  // Check if the user has already made three incorrect attempts
  if (incorrectAttempts >= 3) {
    alert("You have exceeded the maximum number of incorrect attempts. You will be logged out.");
    // Implement logout logic here
    return;
  }

  // Ask for the password
  var passAlert = prompt('Please enter your password, 739120');

  // Check if the provided password is correct
  if (passAlert === '739120') {
    // Password is correct
    console.log(true);
    // Set the LockDown status to false in Firestore
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var db = firebase.firestore();
        db.collection("users").doc(user.uid).update({
          LockDown: false
        }).then(function() {
          console.log("LockDown status changed to false.");
          location.reload();
        }).catch(function(error) {
          console.error("Error changing LockDown status:", error);
        });
      } else {
        console.log("No user is signed in.");
      }
    });
  } else {
    // Password is incorrect
    console.log(false);
    incorrectAttempts++; // Increment the incorrect attempts counter
    if (incorrectAttempts >= 3) {
      alert("You have exceeded the maximum number of incorrect attempts. You will be logged out.");
      firebase.auth().signOut()
      .then(function () {
        window.location = "index.html"; 
      })
      .catch(function (error) {
       
      });    }
  }
}

  