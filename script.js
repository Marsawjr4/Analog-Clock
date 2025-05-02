const hr = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");

function displayTime(){
  let date = new Date();
  let hh = date.getHours() % 12;
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotate = 30 * hh + mm/2;
  let mRotate = 6 * mm;
  let sRotate = 6 * ss;

  hr.style.transform = `rotate(${hRotate}deg)`;
  min.style.transform = `rotate(${mRotate}deg)`;
  sec.style.transform = `rotate(${sRotate}deg)`;
}

displayTime();

setInterval(displayTime, 1000);
