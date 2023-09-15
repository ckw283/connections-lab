let lightswitch;

lightswitch = document.getElementById('lightswitch');
console.log(lightswitch);

lightswitch.addEventListener("click", turnLightOn)

function turnLightOn(){
    console.log("light on");
    document.body.style.backgroundColor = "#ffffff";
    document.getElementById('smiskileft').src = "images/smiski-head.png";
    document.getElementById('smiskiright').src = "images/smiski-head.png";
}

let smiskileft;
let smiskiright;

smiskileft = document.getElementById('smiskileft');

smiskileft.addEventListener("click", turnLightOff)

function turnLightOff(){
    console.log("light off");
    document.body.style.backgroundColor = "#000000";
    document.getElementById('smiskileft').src = "images/smiski-eyes.png";
    document.getElementById('smiskiright').src = "images/smiski-eyes.png";
}

smiskiright = document.getElementById('smiskiright');

smiskiright.addEventListener("click", turnLightOff)

function turnLightOff(){
    console.log("light off");
    document.body.style.backgroundColor = "#000000";
    document.getElementById('smiskileft').src = "images/smiski-eyes.png";
    document.getElementById('smiskiright').src = "images/smiski-eyes.png";
}



// const batches = ["avocado", "banana", "coconut", "dragonfruit"];




// //ID the button
// let randomButton = document.getElementById("random-button");

// //listen for click
// randomButton.addEventListener("click", function () {
//     console.log("button clicked");

//     let index = Math.floor(Math.random() * 4);
//     console.log(index);

//     document.getElementById("heading").innerHTML = batches[index];
// });

// console.log("hello");

// window.addEventListener("load", function () {
//     console.log("page loaded");
// });