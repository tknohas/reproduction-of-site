function clickButton(button) {
  const result = document.getElementById('result');
  let button_value = button.innerHTML;
  
  if (button_value == "AC") {
   result.innerHTML = 0;
  } else if (button_value == "=") {
   result.innerHTML = eval(result.innerHTML);
  } else if (result.innerHTML == 0 && button_value == "00") {
   result.innerHTML = 0;
  } else if (result.innerHTML == 0 && button_value == "*") {
   result.innerHTML = 0;
  } else if (result.innerHTML == 0 && button_value == "/") {
   result.innerHTML = 0;
  } else if (button_value == "+" && result.innerHTML.slice(-1) == "+"){
  } else if (button_value == "-" && result.innerHTML.slice(-1) == "-"){
  } else if (button_value == "*" && result.innerHTML.slice(-1) == "*"){
  } else if (button_value == "/" && result.innerHTML.slice(-1) == "/"){
  } else if (button_value == "." && result.innerHTML.slice(-1) == "."){
  } else if (button_value == "+" && result.innerHTML.slice(-1) == "-"){
  } else if (button_value == "+" && result.innerHTML.slice(-1) == "*"){
  } else if (button_value == "+" && result.innerHTML.slice(-1) == "/"){
  } else if (button_value == "+" && result.innerHTML.slice(-1) == "."){
  } else if (button_value == "-" && result.innerHTML.slice(-1) == "+"){
  } else if (button_value == "-" && result.innerHTML.slice(-1) == "*"){
  } else if (button_value == "-" && result.innerHTML.slice(-1) == "/"){
  } else if (button_value == "-" && result.innerHTML.slice(-1) == "."){
  } else if (button_value == "*" && result.innerHTML.slice(-1) == "+"){
  } else if (button_value == "*" && result.innerHTML.slice(-1) == "-"){
  } else if (button_value == "*" && result.innerHTML.slice(-1) == "/"){
  } else if (button_value == "*" && result.innerHTML.slice(-1) == "."){
  } else if (button_value == "/" && result.innerHTML.slice(-1) == "+"){
  } else if (button_value == "/" && result.innerHTML.slice(-1) == "-"){
  } else if (button_value == "/" && result.innerHTML.slice(-1) == "*"){
  } else if (button_value == "/" && result.innerHTML.slice(-1) == "."){
  } else if (button_value == "." && result.innerHTML.slice(-1) == "+"){
  } else if (button_value == "." && result.innerHTML.slice(-1) == "-"){
  } else if (button_value == "." && result.innerHTML.slice(-1) == "*"){
  } else if (button_value == "." && result.innerHTML.slice(-1) == "/"){
  } else {
   if (result.innerHTML == 0) {
    result.innerHTML = button_value;
   } else {
    result.innerHTML = result.innerHTML + button_value;
   }
  }
 }
  
  