function currentTime(data) {
    let hours = data.getHours()
    let minutes = data.getMinutes()
    let TimeTerm = "";

    if (hours >= 12) {
        TimeTerm = "PM";
    } else
        TimeTerm = "AM";

    hours = hours % 12;
    if (hours % 12 === 0) 
       hours=12; 
    
    if (minutes < 10) {   //07
        minutes = "0" + minutes;
    } else
        minutes = minutes; //12

    return hours + ":" + minutes + " " + TimeTerm;
}
console.log(currentTime(new Date));

/*
var time = new Date();
console.log(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);*/
