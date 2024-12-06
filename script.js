function showModal() {
  document.getElementById("myModal").style.display = "flex";
}
function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

function showPzzleModal() {
  document.getElementById("myPModal").style.display = "flex";
}
function hidePzzleModal() {
  document.getElementById("myPModal").style.display = "none";
}

var myTimer = document.getElementById("time");

function startTimer(seconds) {
  console.log(seconds);
  myTimer.innerHTML = seconds;

  if (seconds > 0) {
    seconds = seconds - 1; //lower the time by 1
    //setTimeout(function, delay, parameter)
    setTimeout(startTimer, 1000, seconds); //calls startTimer(duration) after 1000ms
  } else {
    myTimer.style.color = "black";
    document.getElementById("copie").classList.remove("hidecop");
    window.location.href = "https://89y3dr.csb.app/";
  }
}

startTimer(120);
