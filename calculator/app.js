let expression = '';

function appendToDisplay(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  let result = '';
  try {
    result = eval(expression);
    if (!isFinite(result)) {
      throw new Error('Division by zero');
    }
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  } finally {
    expression = result.toString();
  }
}
