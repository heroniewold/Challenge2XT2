function huidigeTijd() {
            // aanroepen huidige tijd in uur, minuut en seconde
            var today = new Date();
            var tijd = addLeadingZero(today.getHours()) + ":" + addLeadingZero(today.getMinutes()) + ":" + addLeadingZero(today.getSeconds());
        
            // zorgt ervoor dat de klok op de website zicthbaar is
            document.getElementById("clock").innerText = tijd;
            
            // zorgt ervoor dat de klok bijgwerkt blijft
            setInterval(huidigeTijd, 1000);
        } 
        
        function huidigeDatum() {
            // aanroepen huidige dat
            var today = new Date();
            var datum = today.getDate() + " / " + (today.getMonth() + 1) + " / " + today.getFullYear();
            
            document.getElementById("date").innerHTML = datum;
        }
        huidigeDatum();
        huidigeTijd(); 


// add a zero after single digits
function addLeadingZero(getal) {
    if(getal < 10){
        getal = "0" + getal;
    }
    return getal;
}


// change background based on time of day
function changeBackground() {
var today = new Date();
var currentTime = today.getHours();

    if (currentTime < 6) {
        document.body.style.backgroundColor = "#000000";
    } 
    else if (currentTime < 12) {
        document.body.style.backgroundColor = "#93D1BA";
    } 
    else if (currentTime < 18) {
        document.body.style.backgroundColor = "#71CFFF";
    }
    else {
        document.body.style.backgroundColor = "#192B53";
    }
    setInterval(changeBackground, 1000);
}
changeBackground();

// make a rooster appear when its time to wake up and a sheep when its time to sleep
function alarmClock() {
var today = new Date();
var currentTime = today.getHours();
    
    if (currentTime >= 8 && currentTime < 9) {
        document.getElementById("rooster").style.display = "block";
    }
    else if (currentTime >= 21 && currentTime < 22) {
        document.getElementById("sheep").style.display = "block";
    }
    setInterval(alarmClock, 1000);   
}
alarmClock();

// disable the sheep and chick when the time for bed and morning are gone
function disableChick() {
var today = new Date();
var currentTime = today.getHours();
    if (currentTime >= 9) {
        document.getElementById("rooster").style.display = "none";
    }
    setInterval(disableChick, 1000); 
}
function disableFluff() {
var today = new Date();
var currentTime = today.getHours();
    if (currentTime >= 22) {
        document.getElementById("sheep").style.display = "none";
    }
    setInterval(disableFluff, 1000); 
}
disableChick();
disableFluff();
