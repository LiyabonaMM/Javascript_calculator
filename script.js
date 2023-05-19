//let sum = '';: This line declares a variable sum and initializes it with an empty string. 
//This variable will store the arithmetic expression entered by the user.
let sum = '';
const output = document.getElementById('output');
//This line selects the HTML element with the ID output using the getElementById function. 
//The output constant refers to the input element where the calculation result will be displayed.
function appendToOutput(value) {
  sum += value;
  output.value = sum;
}
//This is a function that is called when a number or operator button is clicked. 
//It takes a value parameter representing the button value

function calculateSum() {
  try {
    const result = eval(sum);
    output.value = result;
    sum = result.toString();
  } catch (error) {
    output.value = 'Error';
  }
}
//when the equal button is pressed it must calculate that expression stored in th 'sum' using the eval()
//results arre assigned to 'result' constant
//f an error occurs during evaluation, the output element displays an "Error" message.

function clearSum() {
  sum = '';
  output.value = '';
}
