/* function huidigeTijd() {
            // aanroepen huidige tijd in uur, minuut en seconde
            var date = new Date();
            var h = date.getHours(); // 0 - 23
            var m = date.getMinutes(); // 0 - 59
            var s = date.getSeconds(); // 0 - 59
    
            // als de tijd een afgerond tiental is, zoals 10/20/30, voegt deze code een 0 achter de 1/2/3
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
        
            // zorgt ervoor dat de clock op de website zicthbaar is
            var time = h + ":" + m + ":" + s;
            document.getElementById("digitaleKlok").innerText = time;
            document.getElementById("digitaleKlok").textContent = time;
            
            // zorgt ervoor dat de klok bijgwerkt blijft
            setTimeout(huidigeTijd, 1000);
        } 
        
        function huidigeDatum() {
            var date = new Date();
            year = date.getFullYear();
            month = date.getMonth();
            day = date.getDate();
            
            var datum = day + " " + "/" + " " + month + " " + "/" + " " + year;
            document.getElementById("dagDatum").innerHTML = datum;
        }
        huidigeDatum();
        huidigeTijd(); 
    */
var today = new Date();



document.getElementById('date').innerHTML = today.getDay() + " / " + (today.getMonth() + 1) + " / " + today.getFullYear();

document.getElementById('clock').innerHTML = today.getHours() + ":" + addLeadingZero(today.getMinutes()) + ":" + addLeadingZero(today.getSeconds());


function addLeadingZero(getal) {
    if(getal < 10){
        getal = "0" + getal;
    }
    return getal;
}