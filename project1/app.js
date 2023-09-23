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

    function changeChannel() {

        if (document.body.style.backgroundImage == 'url("images/StevenUniverseBG.jpg")') {
            document.body.style.backgroundImage = 'url("images/SummerCampIslandBG.jpg")'
        }
        else {
            document.body.style.backgroundImage = 'url("images/StevenUniverseBG.jpg")';
        }

    }

    let powerbutton;

    powerbutton = document.getElementById('powerbutton');

    powerbutton.addEventListener("click", changePower);

    function changePower() {
        
       if (document.body.style.backgroundColor == "rgb(0, 0, 0)" &&
        document.body.style.backgroundImage == "none") {
            document.body.style.backgroundImage = 'url("images/bgimage.jpg")';
        }
        else {
            document.body.style.backgroundColor = "rgb(0, 0, 0)";
            document.body.style.backgroundImage = "none" ;
        }

    }
})