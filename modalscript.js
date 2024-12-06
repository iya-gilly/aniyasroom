function blue1() {
  if (document.getElementById("BL").src.match("lock.png")) {
    document.getElementById("BL").src = "images/cir.png";
  } else if (document.getElementById("BL").src.match("cir.png")) {
    document.getElementById("BL").src = "images/ex.png";
  } else if (document.getElementById("BL").src.match("ex.png")) {
    document.getElementById("BL").src = "images/star.png";
  } else if (document.getElementById("BL").src.match("star.png")) {
    document.getElementById("BL").src = "images/triangle.png";
  } else if (document.getElementById("BL").src.match("triangle.png")) {
    document.getElementById("BL").src = "images/lock.png";
  }
  console.log("click");
  autoWin();
}

function blue2() {
  if (document.getElementById("BR").src.match("lock.png")) {
    document.getElementById("BR").src = "images/cir.png";
  } else if (document.getElementById("BR").src.match("cir.png")) {
    document.getElementById("BR").src = "images/ex.png";
  } else if (document.getElementById("BR").src.match("ex.png")) {
    document.getElementById("BR").src = "images/star.png";
  } else if (document.getElementById("BR").src.match("star.png")) {
    document.getElementById("BR").src = "images/triangle.png";
  } else if (document.getElementById("BR").src.match("triangle.png")) {
    document.getElementById("BR").src = "images/lock.png";
  }
  console.log("click");
  autoWin();
}

function violet1() {
  if (document.getElementById("VL").src.match("lock.png")) {
    document.getElementById("VL").src = "images/cir.png";
  } else if (document.getElementById("VL").src.match("cir.png")) {
    document.getElementById("VL").src = "images/ex.png";
  } else if (document.getElementById("VL").src.match("ex.png")) {
    document.getElementById("VL").src = "images/star.png";
  } else if (document.getElementById("VL").src.match("star.png")) {
    document.getElementById("VL").src = "images/triangle.png";
  } else if (document.getElementById("VL").src.match("triangle.png")) {
    document.getElementById("VL").src = "images/lock.png";
  }
  console.log("click");
  autoWin();
}

function violet2() {
  if (document.getElementById("VR").src.match("lock.png")) {
    document.getElementById("VR").src = "images/cir.png";
  } else if (document.getElementById("VR").src.match("cir.png")) {
    document.getElementById("VR").src = "images/ex.png";
  } else if (document.getElementById("VR").src.match("ex.png")) {
    document.getElementById("VR").src = "images/star.png";
  } else if (document.getElementById("VR").src.match("star.png")) {
    document.getElementById("VR").src = "images/triangle.png";
  } else if (document.getElementById("VR").src.match("triangle.png")) {
    document.getElementById("VR").src = "images/lock.png";
  }
  console.log("click");
  autoWin();
}

function red1() {
  if (document.getElementById("RL").src.match("lock.png")) {
    document.getElementById("RL").src = "images/cir.png";
  } else if (document.getElementById("RL").src.match("cir.png")) {
    document.getElementById("RL").src = "images/ex.png";
  } else if (document.getElementById("RL").src.match("ex.png")) {
    document.getElementById("RL").src = "images/star.png";
  } else if (document.getElementById("RL").src.match("star.png")) {
    document.getElementById("RL").src = "images/triangle.png";
  } else if (document.getElementById("RL").src.match("triangle.png")) {
    document.getElementById("RL").src = "images/lock.png";
  }
  console.log("click");
  autoWin();
}

function red2() {
  if (document.getElementById("RR").src.match("lock.png")) {
    document.getElementById("RR").src = "images/cir.png";
  } else if (document.getElementById("RR").src.match("cir.png")) {
    document.getElementById("RR").src = "images/ex.png";
  } else if (document.getElementById("RR").src.match("ex.png")) {
    document.getElementById("RR").src = "images/star.png";
  } else if (document.getElementById("RR").src.match("star.png")) {
    document.getElementById("RR").src = "images/triangle.png";
  } else if (document.getElementById("RR").src.match("triangle.png")) {
    document.getElementById("RR").src = "images/lock.png";
  }
  console.log("click");
  autoWin();
}

function yellow1() {
  if (document.getElementById("YL").src.match("lock.png")) {
    document.getElementById("YL").src = "images/cir.png";
  } else if (document.getElementById("YL").src.match("cir.png")) {
    document.getElementById("YL").src = "images/ex.png";
  } else if (document.getElementById("YL").src.match("ex.png")) {
    document.getElementById("YL").src = "images/star.png";
  } else if (document.getElementById("YL").src.match("star.png")) {
    document.getElementById("YL").src = "images/triangle.png";
  } else if (document.getElementById("YL").src.match("triangle.png")) {
    document.getElementById("YL").src = "images/lock.png";
  }
  console.log("click");
  autoWin();
}

function yellow2() {
  if (document.getElementById("YR").src.match("lock.png")) {
    document.getElementById("YR").src = "images/cir.png";
  } else if (document.getElementById("YR").src.match("cir.png")) {
    document.getElementById("YR").src = "images/ex.png";
  } else if (document.getElementById("YR").src.match("ex.png")) {
    document.getElementById("YR").src = "images/star.png";
  } else if (document.getElementById("YR").src.match("star.png")) {
    document.getElementById("YR").src = "images/triangle.png";
  } else if (document.getElementById("YR").src.match("triangle.png")) {
    document.getElementById("YR").src = "images/lock.png";
  }
  console.log("click");
  autoWin();
}
function autoWin() {
  console.log("checking...");
  if (
    document.getElementById("BL").src.match("triangle.png") &&
    document.getElementById("BR").src.match("ex.png") &&
    document.getElementById("VL").src.match("cir.png") &&
    document.getElementById("VR").src.match("star.png") &&
    document.getElementById("RL").src.match("ex.png") &&
    document.getElementById("RR").src.match("triangle.png") &&
    document.getElementById("YL").src.match("star.png") &&
    document.getElementById("YR").src.match("cir.png")
  ) {
    console.log("winner!");
    document.getElementById("BL").classList.add("translucent");
    document.getElementById("BR").classList.add("translucent");
    document.getElementById("VL").classList.add("translucent");
    document.getElementById("VR").classList.add("translucent");
    document.getElementById("RL").classList.add("translucent");
    document.getElementById("RR").classList.add("translucent");
    document.getElementById("YL").classList.add("translucent");
    document.getElementById("YR").classList.add("translucent");
    window.location.href = "https://sfp8vp.csb.app/";
  } else {
    console.log("You're a LOSER!");
  }
}
