console.log("hi");

window.addEventListener("load", () => {
    console.log("page has loaded");

    //fetch data from json
    fetch("creators.json") //asking for data
        .then((response) => { //getting a promise object
            console.log(response)
            return response.json();
        })

        .then((data) => { //once the promise has resolved - once the promise status is success

            let name1Element = document.getElementById('creator1name');
            name1Element.innerHTML = data.creators[0].name;

            let name2Element = document.getElementById('creator2name');
            name2Element.innerHTML = data.creators[1].name;

            let year1Element = document.getElementById('creator1year');
            year1Element.innerHTML = data.creators[0].year;

            let year2Element = document.getElementById('creator2year');
            year2Element.innerHTML = data.creators[1].year;

            let show1Element = document.getElementById('creator1show');
            show1Element.innerHTML = data.creators[0].show;

            let show2Element = document.getElementById('creator2show');
            show2Element.innerHTML = data.creators[1].show;


        })

        .catch(error => {
            console.log(error)
        })

    let channelbutton;

    channelbutton = document.getElementById('channelbutton');

    channelbutton.addEventListener("click", changeChannel);



    let powerbutton;

    powerbutton = document.getElementById('powerbutton');

    powerbutton.addEventListener("click", changePower);

    // function changePower() {

    //     if (document.body.style.backgroundColor == "rgb(0, 0, 0)" &&
    //         document.body.style.backgroundImage == "none") {
    //         document.body.style.backgroundImage = 'url("images/bgimage.jpg")';
    //     }
    //     else {
    //         document.body.style.backgroundColor = "rgb(0, 0, 0)";
    //         document.body.style.backgroundImage = "none";
    //     }

    // }


})

function setup() {
    createCanvas(200, 400);
}

function drawRemote(mouseX, mouseY) {
    //remote
    noStroke();
    fill(0);
    rectMode(CORNER);
    rect(0, 0, 200, 400, 30);

    //power button
    fill(255, 0, 0);
    circle(100, 40, 40);

    //cross button
    fill(255, 200, 200);
    rectMode(CENTER);
    rect(100, 130, 40, 100, 10);
    rect(100, 130, 100, 40, 10);
    stroke(3);
    circle(100, 130, 40);

    //channel button
    fill(255);
    rectMode(CENTER);
    rect(100, 260, 40, 100, 30);
    line(90, 240, 100, 225);
    line(100, 225, 110, 240);
    line(90, 270, 100, 285);
    line(100, 285, 110, 270);
}

function draw() {
    drawRemote(width / 5 * 4, height / 2);
}

function mousePressed() {
    if (mouseX > 80 && mouseX < 120 && mouseY > 20 && mouseY < 60) {
        changePower();
    }

    if (mouseX > 80 && mouseX < 120 && mouseY > 210 && mouseY < 310) {
        console.log("channel!");
        changeChannel();
    }
}

function changeChannel() {

    if (document.body.style.backgroundImage == 'url("images/StevenUniverseBG.jpg")') {
        document.body.style.backgroundImage = 'url("images/SummerCampIslandBG.jpg")';
        document.getElementById('creator1name').style.color = "black";
        document.getElementById('creator2name').style.color = "aqua";
    }
    else {
        document.body.style.backgroundImage = 'url("images/StevenUniverseBG.jpg")';
        document.getElementById('creator1name').style.color = "aqua";
        document.getElementById('creator2name').style.color = "black";
    }

}

function changePower() {

    if (document.body.style.backgroundColor == "rgb(0, 0, 0)" &&
        document.body.style.backgroundImage == "none") {
        document.body.style.backgroundImage = 'url("images/bgimage.jpg")';
    }
    else {
        document.body.style.backgroundColor = "rgb(0, 0, 0)";
        document.body.style.backgroundImage = "none";
    }

}