var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2017,06,27);
var secondDate = new Date();

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));


console.log(diffDays) ;

document.getElementById("dateDiff").innerHTML = diffDays + "since we met." ;
