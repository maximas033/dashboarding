function checkLockDownStatus() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var db = firebase.firestore();
          db.collection("users").doc(user.uid).get().then(function(doc) {
          if (doc.exists) {
            var isLockedDown = doc.data().LockDown;
            if (isLockedDown === true) {
              console.log("It's in lockdown.");
              document.getElementById("LockingUp").style.display = "block";
              document.getElementById("buttonsList").style.display = "none";
              document.getElementById("notificationCenter").style.display = "none";
              document.getElementById("settingsCenter").style.display = "none";
              document.getElementById("whoIshomeList").style.display = "none";
              document.getElementById("threeButtonSelection").style.display = "none";
            } else {
              console.log("It's not in lockdown.");
              document.getElementById("LockingUp").style.display = "none";
              document.getElementById("buttonsList").style.display = "block";
              document.getElementById("notificationCenter").style.display = "blobk";
            }
          } else {
            console.log("LockDown status document doesn't exist.");
            alert("LockDown status document doesn't exist.")
          }
        }).catch(function(error) {
          console.error("Error checking LockDown status:", error);
          alert("Error checking LockDown status: "+error);
        });
      } else {
        console.log("No user is signed in.");
      }
    });
  }
  
window.onload = checkLockDownStatus()