const db = firebase.firestore();
function getNotifications() {
    const notificationRef = db.collection('notifications');
    return notificationRef.get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            document.getElementById("notificationDot").style.display = "block"
        } else {
          console.log(false);
        }
      })
      .catch((error) => {
        console.error('Error checking for notifications: ', error);
        throw error;
      });
  }
  
  window.onload = getNotifications;