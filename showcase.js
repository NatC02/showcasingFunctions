let f = function () {
    console.log("Hello There");
}

f();

//the above function cannot be assigned another value, as in f cannot be assgined a number value and such

let message = function simpleConsoleMessage(){
    console.log("just another message");
}

vibrateBtn = document.createElement('button');
vibrateBtn.setAttribute("id", "btn");

//check for the different versions of the vibrate api (comes with HTML5)
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if (navigator.vibrate) {
    // checks if api is supported for browser
    vibrateBtn.addEventListener('click', function(ev) {
    console.log('Vibration has worked!');
    navigator.vibrate(1000);
        });
    }

    (function(ev) {
    console.log("you can try making your own theme, also this api will drain your battery! Its too much power!")
    })();