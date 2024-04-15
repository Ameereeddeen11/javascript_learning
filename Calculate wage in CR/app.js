var child;

function childs(){
  if (document.getElementById("yes").checked) {
    document.getElementById("child").style.display = "block";
    child = true;
    countOfChilds = Number(document.getElementById("countOfChilds").value);
  }
  else {
    child = false;
  }
}

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

function calculate(wages, dph, child) {

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