let btnplus = document.querySelector(".btnPlus");
let btnmin = document.querySelector(".btnMinus");
let cnt = document.querySelector(".cnt");

btnplus.onclick = function () {
  if (cnt.innerHTML < 9) {
    cnt.innerHTML++;
  }
  if (cnt.innerHTML >= 1 && cnt.innerHTML <= 3) {
    cnt.style.background = "red";
  }
  if (cnt.innerHTML >= 4 && cnt.innerHTML <= 6) {
    cnt.style.background = "yellow";
  }
  if (cnt.innerHTML >= 7 && cnt.innerHTML <= 9) {
    cnt.style.background = "green";
  }
};

btnmin.onclick = function () {
  if (cnt.innerHTML > -9) {
    cnt.innerHTML--;
  }
  if(cnt.innerHTML <= -1 && cnt.innerHTML >= -3){
    cnt.style.background = "blue";
  }
  if(cnt.innerHTML <= -4 && cnt.innerHTML >= -6){
    cnt.style.background = "black";
  }
  if(cnt.innerHTML <= -7 && cnt.innerHTML >= -9){
    cnt.style.background = "orange";
  }
};
