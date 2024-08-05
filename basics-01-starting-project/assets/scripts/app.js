const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(
  operator,
  resultBeforeCalculation,
  calculationNumber
) {
  const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`;
  outputResult(currentResult, calculationDescription);
}


function writeToLog(
  operationIdentifier,
  previousResult,
  operationNumber,
  newResult
) {
    const logEntry = {
        operation:operationIdentifier,
        previousResult: previousResult,
        number: operationNumber,
        result: newResult
      };
      logEntries.push(logEntry);
      console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialNumber, enteredNumber);
  writeToLog('ADD', initialNumber, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialNumber, enteredNumber);
  writeToLog('SUBTRACT', initialNumber, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialNumber, enteredNumber);
  writeToLog('MULTIPLY', initialNumber, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialNumber = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialNumber, enteredNumber);
  writeToLog('DIVIDE', initialNumber, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
