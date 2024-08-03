const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput(){
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalculation, calculationNumber){
    const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`;
    outputResult(currentResult, calculationDescription);
}


function add(){
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult  += enteredNumber;
    createAndWriteOutput('+', initialNumber, enteredNumber);
    
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialNumber, enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult *=  enteredNumber;
    createAndWriteOutput('*', initialNumber, enteredNumber);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialNumber, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


