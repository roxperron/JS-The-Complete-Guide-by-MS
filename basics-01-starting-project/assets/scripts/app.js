const defaultResult = 0;
let currentResult = defaultResult;


function getUserNumberInput(){
  return parseInt(userInput.value);
}


function add(){
    const enteredNumber = getUserNumberInput();
    const calculDesc = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calculDesc);
}



addBtn.addEventListener('click', add);


