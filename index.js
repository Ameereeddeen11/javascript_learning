// Purpose: To test the connection between index.html and index.js
function myFunction() {
  document.getElementById("index-2").style.fontSize="100px";
}

document.getElementById("p1").textContent = "Hello World!";

// Variables
let a = "Amir je frejer";
console.log(a);

let m, i, r;
m = 19;
i = 1554;
r = 1.5;
relationship = false; // Boolean
console.log(`Amir is ${m} years old, Ivi ${i} years old, a Rijini ${r} godina.`);
console.log("variable m is " + typeof m, "variable i is " + typeof i, "variable i is " + typeof r);
console.log(`Is Amir in a relationship? ${relationship}`); 

document.getElementById("submit").onclick = function() {
  wages = Number(document.getElementById("wages").value);
  const dph = Number(document.getElementById("dph").value);
  const insurance = 0.071;
  if (validation(wages, dph) == false){
    document.getElementById("result").textContent = "Please enter valid values!"
  }
  else{
    income = wages - (wages * dph/100) - (wages * insurance);
    document.getElementById("result").textContent = `Your income is ${income} !`;
  }
}

function validation(wages, dph){
  wages = Boolean(wages);
  dph = Boolean(dph);
  if (wages && dph) {
    return true;
  }
  else{
    return false;
  }
}

function select(){
  switch (document.getElementById("objects").value){
    case "circle":
      document.getElementById("circle-par").style.display = 'block'
      break;
    case "square":
      document.getElementById("square-par").style.display = 'block'
      break;
    case "rectangle":
      document.getElementById("rectangle-par").style.display = 'block'
      break;
    case "triangle":
      document.getElementById("triangle-par").style.display = 'block'
      break;
  }
}

circleBtn.onclick = function(){
  const radius = Number(document.getElementById("radius").value);
  let area = Math.PI * radius**2;
  document.getElementById("circle-result").textContent = `Area of the circle is ${area}`;
}

squareBtn.onclick = function(){
  const side = Number(document.getElementById("side-a").value)
  let area = side**2;
  document.getElementById("square-result").textContent = `Area of the square is ${area}`;
}

rectangleBtn.onclick = function(){
  const sideA = Number(document.getElementById("rectangle-side-a").value);
  const sideB = Number(document.getElementById("side-b").value);
  let area = sideA * sideB;
  document.getElementById("rectangle-result").textContent = `Area of the rectangle is ${area}`;
}

triangleBtn.onclick = function(){
  const sideA = Number(document.getElementById("side-a").value);
  const height = Number(document.getElementById("height").value);
  let area = (sideA * height) / 2;
  document.getElementById("triangle-result").textContent = `Area of the triangle is ${area}`;
}

const decreaseBtn = document.getElementById("decreaseBtn"); 
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const value = document.getElementById("count");
let count = 0;

increaseBtn.onclick = function(){
  count++;
  value.textContent = count;
}

decreaseBtn.onclick = function(){
  count--;
  value.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  value.textContent = count;
}
