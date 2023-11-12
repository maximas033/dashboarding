// Function to get the current time in 12-hour format
function getCurrentTimeIn12HourFormat() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    let amOrPm = "AM";
  
    // Convert hours to 12-hour format
    if (hours >= 12) {
      amOrPm = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }
  
    // Ensure that midnight (12:00 AM) is displayed as 12:00 AM, not 0:00 AM
    if (hours === 0) {
      hours = 12;
    }
  
    // Add a leading zero to single-digit minutes
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  
    // Create the formatted time string
    const time12Hour = hours + ":" + formattedMinutes + " " + amOrPm;
  
    // Return the formatted time
    return time12Hour;
  }
  
  // Function to update the displayed time
  function updateCurrentTime() {
    const currentTime12Hour = getCurrentTimeIn12HourFormat();
    document.getElementById("currentTime").innerHTML = currentTime12Hour;
  }
  
  // Initial call to set the current time
  updateCurrentTime();
  
  // Set up a timer to update the time every second (1000 milliseconds)
  setInterval(updateCurrentTime, 1000);
  


  // Function to get the current date
function getCurrentDate() {
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
  
    // Create the formatted date string
    const currentDate = dayOfWeek + ", " + month + " " + day + ", " + year;
  
    // Return the formatted date
    return currentDate;
  }
  
  // Function to update the displayed date
  function updateCurrentDate() {
    const currentDate = getCurrentDate();
    document.getElementById("currentDate").innerHTML = currentDate;
  }
  
  // Initial call to set the current date
  updateCurrentDate();
  
  // Set up a timer to update the date every day (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  setInterval(updateCurrentDate, 24 * 60 * 60 * 1000);
  


function displayMessage(){
  document.getElementById("infoText").style.display = "block"
}

function closeMessage(){
  document.getElementById("infoText").style.display = "none";
}