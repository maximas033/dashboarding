function openLogin() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById("profileCenter").style.display = "block"
        document.getElementById('email').innerHTML = user.email
      } else {
        document.getElementById("profileCenter").style.display = "none"
        window.location = "index.html";
      }
    });
  }

  function openNotification() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById("notificationCenter").style.display = "block"
      } else {
          // No user is signed in, show login screen...
      }
    });
  }

  function openSettinngs(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById("settingsCenter").style.display = "block"
      } else {
          // No user is signed in, show login screen...
      }
    });
  }


  function openWhoIsHomeList() {
    let incorrectAttempts = 0;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const password = window.prompt("Please enter your password:");
        if (password === "People") {
          document.getElementById("whoIshomeList").style.display = "block";
        } else {
          alert("Incorrect password. Please try again.");
          incorrectAttempts++;
          
          if (incorrectAttempts >= 3) {
            // If incorrect password entered 3 times, log the user out
            firebase.auth().signOut()
              .then(function() {
                alert("You have been logged out due to too many incorrect attempts.");
                window.location = 'index.html';
              })
              .catch(function(error) {
                console.error("Error logging out:", error);
              });
          }
        }
      }
    });
  }
  
  function openLockUp() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // Get a reference to the Firestore database
        var db = firebase.firestore();
  
        // Define the LockDown status (true or false)
        var isLockedDown = true;

        // Get the current timestamp
        var currentTime = new Date();

        // Extract the current hour and minute
        var currentHour = currentTime.getHours();
        var currentMinute = currentTime.getMinutes();
        // Convert the hour to 12-hour format and add "AM" or "PM"
        var period = currentHour < 12 ? "AM" : "PM";
         if (currentHour === 0) {
          currentHour = 12; // Midnight (12:00 AM)
        } else if (currentHour > 12) {
          currentHour -= 12;
        }

        // Format the hour and minute as a string
        var formattedTime = `${currentHour}:${currentMinute} ${period}`;
  
        // Set the LockDown status for the current user in Firestore
        db.collection("users").doc(user.uid).set({
          LockDown: isLockedDown
        })
        .then(function() {
          // Successfully saved the LockDown status
          document.getElementById("LockingUp").style.display = "block";
          document.getElementById("buttonsList").style.display = "none";
          document.getElementById("notificationCenter").style.display = "none";
          document.getElementById("settingsCenter").style.display = "none";
          document.getElementById("whoIshomeList").style.display = "none";
          document.getElementById("threeButtonSelection").style.display = "none";
        })
        .then(function(){
          db.collection("notifications").doc(user.uid).set({
            locdowntime: formattedTime // Save the formatted time in 12-hour format
          })
        })
        .catch(function(error) {
          console.error("Error saving LockDown status:", error);
        });
      } else {
      }
    });
  }
  