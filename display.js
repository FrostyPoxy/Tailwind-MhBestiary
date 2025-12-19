function overview() {
  let w = document.getElementById("weaknesses");
  let o = document.getElementById("overview");
  let m = document.getElementById("moveset");
  let d = document.getElementById("drops");
  let bW = document.getElementById("weaknesses-button");
  let bO = document.getElementById("overview-button");
  let bM = document.getElementById("combat-button");
  let bD = document.getElementById("materials-button");
  
  if (o.style.display === "block") {
    return false;
  }
  else {
    bO.className += " current";
    bW.classList.remove("current");
    bM.classList.remove("current");
    bD.classList.remove("current");
    w.style.display = "none";
    o.style.display = "block";
    m.style.display = "none";
    d.style.display = "none";
  }
}

function weaknesses() {
  let w = document.getElementById("weaknesses");
  let o = document.getElementById("overview");
  let m = document.getElementById("moveset");
  let d = document.getElementById("drops");
  let bW = document.getElementById("weaknesses-button");
  let bO = document.getElementById("overview-button");
  let bM = document.getElementById("combat-button");
  let bD = document.getElementById("materials-button");
  
  if (w.style.display === "flex") {
    return false;
  }
  else {
    bO.classList.remove("current");
    bW.className += " current";
    bM.classList.remove("current");
    bD.classList.remove("current");
  
    w.style.display = "flex";
    o.style.display = "none";
    m.style.display = "none";
    d.style.display = "none";
  }
}
function combat() {
  let w = document.getElementById("weaknesses");
  let o = document.getElementById("overview");
  let m = document.getElementById("moveset");
  let d = document.getElementById("drops");
  let bW = document.getElementById("weaknesses-button");
  let bO = document.getElementById("overview-button");
  let bM = document.getElementById("combat-button");
  let bD = document.getElementById("materials-button");
  
  if (m.style.display === "block") {
    return false;
  }
  else {
    bO.classList.remove("current");
    bW.classList.remove("current");
    bM.className += " current";
    bD.classList.remove("current");
    w.style.display = "none";
    o.style.display = "none";
    m.style.display = "block";
    d.style.display = "none";
  }
}

function materials() {
  let w = document.getElementById("weaknesses");
  let o = document.getElementById("overview");
  let m = document.getElementById("moveset");
  let d = document.getElementById("drops");
  let bW = document.getElementById("weaknesses-button");
  let bO = document.getElementById("overview-button");
  let bM = document.getElementById("combat-button");
  let bD = document.getElementById("materials-button");
  
  if (d.style.display === "block") {
    return false;
  }
  bO.classList.remove("current");
    bW.classList.remove("current");
    bM.classList.remove("current");
    bD.className += " current";
    w.style.display = "none";
    o.style.display = "none";
    m.style.display = "none";
    d.style.display = "block";
  }
