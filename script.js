var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h3 = document.querySelector("h3");
var array = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

function setGradient() {
  body.style.background =`linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.textContent = body.style.background;
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randomNum() {
  result = "";
  for (i=0; i<6; i++){
    result += array[Math.floor(Math.random()*15) +1];
  }
  return result;
}

function randomColor() {
  color1.value = "#"+randomNum();
  color2.value = "#"+randomNum();
  body.style.background =`linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.textContent = body.style.background;
}