function setMyDate(){
    var time = document.querySelector('.hours-min-sec');
var yearMonthDay = document.querySelector('.day-month-year');
var date = new Date();
    time.innerHTML = "<h1>" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "</h1>";
    yearMonthDay.innerHTML = "<h1>" + date.getDate() + "-" + parseInt(date.getMonth()+1) + "-" + date.getFullYear();
}
setInterval(setMyDate,100);
onload = setMyDate();
function setColor(){
    var color = document.querySelector('.input-color').value;
    localStorage.setItem("color" , color);
    var container = document.querySelector('.container');
    container.style.background = localStorage.getItem("color");
}
function getcolor(){
    localStorage.getItem("color");
    document.querySelector('.container').style.background = localStorage.getItem("color");
}
getcolor();
setInterval(getcolor,100);
var color = document.querySelector('.input-color');
color.addEventListener('change' , ()=>{
    setColor();
});