

//Function to clear all the values
function resetAll() {
    document.getElementById("result").value = "";
  }
  
  function deleteDigit() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
  }
  
  //Function to display values
  function display(value) {
    document.getElementById("result").value += value;
  }
  
  //Function to evaluate the expression and return result
  function calculate() {
    const p = document.getElementById("result").value;
    const q = eval(p);
    document.getElementById("result").value = q;
  }
  