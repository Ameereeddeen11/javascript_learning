var child;

function childs() {
  document.getElementById("child").style.display = "block";
  child = true;
}

document.getElementById("submit").onclick = function() {
    wages = Number(document.getElementById("wages").value);
    if (validation(wages, dph) == false){
      document.getElementById("result").textContent = "Please enter valid values!"
    }
    else{
      calculate(wages, child)
    }
  }

function calculate(wages, child) {
  const insurance = 0.071;
  const dph = Number(document.getElementById("dph").value);
  let countOfChildren = Number(document.getElementById("countOfChildren").value);
  if (child == true) {
    wage_dph = wages * dph/100;
    wage_insurance = wages * insurance;
    income = wages - wage_dph - wage_insurance + (1267*countOfChildren);
    document.getElementById("result").textContent = `Your income is ${income} CZK !`;
  }
  else {
    income = wages - (wages * dph/100) - (wages * insurance);
    document.getElementById("result").textContent = `Your income is ${income} CZK !`;
  }
  var xValues = ["Income", "DPH", "Insurance"];
  var yValues = [income, wage_dph, wage_insurance];
  var pieColor = ["#3e95cd", "#8e5ea2", "#3cba9f"];
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: pieColor,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Your income"
      }
    }
  });
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

function graph(income, wage_dph, wage_insurance) {
  
}