var data = ["This is a typing test.", "Your goal is to duplicate the provided text, EXACTLY, in the field below.", "The timer starts when you start typing, and only stops when you match this text exactly.", "Good Luck!"];
document.getElementById("test-text").innerHTML = data[Math.floor(Math.random()*4)]; 

const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var validEntry = true;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZeros(time) {
    if(time <= 9){
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runtimer(){
    time = leadingZeros(timer[0]) + ":" + leadingZeros(timer[1]) + ":" + leadingZeros(timer[2]);
    theTimer.innerHTML = time;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
    timer[2] = Math.floor((timer[3]) - (timer[1]*100) - (timer[0]*6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let checkText = originText.substring(0, textEntered.length);

    if(textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "lightgreen";
    } else {
        if(textEntered == checkText) {
            testWrapper.style.borderColor = "lightblue";
        } else {
            testWrapper.style.borderColor = "red";
        }
    }
}

// Start the timer:
function start() {
    let enteredTextLength = testArea.value.length;
    if(enteredTextLength === 0 && validEntry){
        validEntry = false;
        interval = setInterval(runtimer, 10);
    }
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    validEntry = true;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";

    location.reload();
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);

// const startbutton = document.querySelector("#unhide");


// startbutton.addEventListener("click", unhide, false);