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
