var child;

function childs() {
  document.getElementById("child").style.display = "block";
  child = true;
}

document.getElementById("submit").onclick = function() {
    wages = Number(document.getElementById("wages").value);
    const dph = Number(document.getElementById("dph").value);
    if (validation(wages, dph) == false){
      document.getElementById("result").textContent = "Please enter valid values!"
    }
    else{
      calculate(wages, dph, child)
    }
  }

function calculate(wages, dph, child) {
  const insurance = 0.071;
  let countOfChildren = Number(document.getElementById("countOfChildren").value);
  if (child == true) {
    income = wages - (wages * dph/100) - (wages * insurance) + (1267*countOfChildren);
    document.getElementById("result").textContent = `Your income is ${income} !`;
  }
  else {
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