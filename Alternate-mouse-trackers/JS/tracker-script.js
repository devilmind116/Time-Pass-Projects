const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE1 = document.querySelector('.circle1');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var horizontalPosition, horizontalPosition2, verticalPosition, verticalPosition2;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    horizontalPosition = windowWidth - e.clientX - 26;
    verticalPosition= windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

}

function altCoordinates(e) {
    horizontalPosition2 = e.clientX - 26;
    verticalPosition2 = e.clientY - 26;

    CIRCLE1.style.left = horizontalPosition2 + 'px';
    CIRCLE1.style.top = verticalPosition2 + 'px';
}

function changeColorOnMeet() {
        CIRCLE1.style.backgroundColor = "green";
        CIRCLE1.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

//second tracer
AREA.addEventListener('mousemove', altCoordinates);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
