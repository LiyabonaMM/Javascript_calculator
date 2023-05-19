/*let sum = '';

function appendValue(value) {
  sum += value;
  document.getElementById('output').value = sum;
}

function appendOperator(operator) {
  if (sum !== '' && !isNaN(sum[sum.length - 1])) {
    sum += operator;
    document.getElementById('output').value = sum;
  }
}

function evaluateSum() {
  if (sum !== '' && !isNaN(sum[sum.length - 1])) {
    try {
      const result = eval(sum);
      document.getElementById('output').value = result;
      sum = result.toString();
    } catch (error) {
      document.getElementById('output').value = 'Error';
      sum = '';
    }
  }
}

function clearSum() {
  sum = '';
  document.getElementById('output').value = '';
}
*/