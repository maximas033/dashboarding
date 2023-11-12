// Function to make an HTML element draggable
function makeElementDraggable(element) {
    // Initialize variables to keep track of the drag state and positions
    let isDragging = false;
    let initialX, initialY;
    let offsetX = 0, offsetY = 0;

    // Add a mousedown event listener to start dragging
    element.addEventListener("mousedown", (event) => {
        // The element is being dragged
        isDragging = true;

        // Calculate the initial position relative to the mouse pointer
        initialX = event.clientX - offsetX;
        initialY = event.clientY - offsetY;

        // Add event listeners for mousemove and mouseup to track the drag
        document.addEventListener("mousemove", dragElement);
        document.addEventListener("mouseup", releaseElement);
    });

    // Function to handle dragging the element
    function dragElement(event) {
        if (isDragging) {
            // Calculate the new offset based on the mouse movement
            offsetX = event.clientX - initialX;
            offsetY = event.clientY - initialY;

            // Apply a transform to move the element
            element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
    }

    // Function to handle releasing the element
    function releaseElement() {
        // The element is no longer being dragged
        isDragging = false;

        // Remove the event listeners for mousemove and mouseup
        document.removeEventListener("mousemove", dragElement);
        document.removeEventListener("mouseup", releaseElement);
    }
}

// Get the element you want to make draggable by its ID
const whoIshomeList = document.getElementById("whoIshomeList");

// Call the makeElementDraggable function to make it draggable
makeElementDraggable(whoIshomeList);
