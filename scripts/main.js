function huidigeTijd() {
            // aanroepen huidige tijd in uur, minuut en seconde
            var today = new Date();
            var tijd = today.getHours() + ":" + addLeadingZero(today.getMinutes()) + ":" + addLeadingZero(today.getSeconds());
        
            // zorgt ervoor dat de klok op de website zicthbaar is
            document.getElementById("clock").innerText = tijd;
            
            // zorgt ervoor dat de klok bijgwerkt blijft
            setInterval(huidigeTijd, 1000);
        } 
        
        function huidigeDatum() {
            var today = new Date();
            var datum = today.getDay() + " / " + (today.getMonth() + 1) + " / " + today.getFullYear();
            
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

