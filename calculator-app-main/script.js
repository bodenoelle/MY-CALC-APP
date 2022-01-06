

//Function to clear all the values
function resetAll() {
    document.getElementById("result").value = "";
  }
  
  function deleteDigit() {
    document.getElementById("result").value = "";
  }
  
  //Function to display values
  function display(value) {
    document.getElementById("result").value += value;
  }
  
  //Function to evaluate the expression and return result
  function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
  }
  