// Get the brightness range element
const brightnessRange = document.getElementById('brightnessRange');

// Load the saved brightness value from localStorage
const savedBrightness = localStorage.getItem('brightness');

// Check if there's a saved brightness value
if (savedBrightness !== null) {
    // Set the brightness range value
    brightnessRange.value = savedBrightness;

    // Apply the brightness on page load
    applyBrightness(`brightness(${savedBrightness}%)`);
}

// Add an event listener for the input event on the brightness range
brightnessRange.addEventListener('input', () => {
    // Calculate the filter value based on the range input
    const filterValue = `brightness(${brightnessRange.value}%)`;

    // Save the brightness value to localStorage
    localStorage.setItem('brightness', brightnessRange.value);

    // Apply the filter to the body
    applyBrightness(filterValue);
});

// Function to apply brightness to the body
function applyBrightness(filterValue) {
    document.body.style.filter = filterValue;
}


// writte the function that will clear the localstorage
function reset() {
    // Clear all data in local storage
    localStorage.clear();
    // Reset the slider back to its default position
    brightnessRange.value = 100;
    // Remove any applied filters
    document.body.style.filter = 'none';
    console.log("Local Storage cleared")
    }
