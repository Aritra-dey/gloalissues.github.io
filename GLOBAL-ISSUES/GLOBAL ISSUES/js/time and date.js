function time(){
    let hrs = new Date().getHours();
    document.getElementById('hrs').innerHTML = hrs;

    let mins = new Date().getMinutes();
    document.getElementById('mins').innerHTML = mins;

    let secs = new Date().getSeconds();
    document.getElementById('secs').innerHTML = secs;
}
function displayTime(){
    let secs = setInterval(time, 1000);
}
displayTime();