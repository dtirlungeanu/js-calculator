// Add a click event listener to a button DONE
// Add click event listeners for each button * DONE
// Event listener accesses the text from the button that is clicked DONE
// Enter the text from the number and operator buttons onto the screen in the HTML * DONE
// Add event listener to the calculate button that fires a function called "calculate" * DONE
// Write the calculate function to take two numbers and an operator and return the answer DONE
// Display the answer on the screen DONE
// Add an event listener to the reset button to clear the page and the variables * DONE

var numberButtons = document.getElementsByClassName('buttonNum');
var operatorButtons = document.getElementsByClassName('operator');
var display = document.getElementById('screen');
var calculateButton = document.getElementsByClassName('equals')[0];
var resetButton = document.getElementsByClassName('buttonClear')[0];
var firstNumber, secondNumber, operator;

function init() {
    for (var i = 0; i < numberButtons.length; i++) {
        var button = numberButtons[i];
        button.addEventListener("click", function(event) {
            var number = event.target.innerHTML;
            displayText(number);
            saveNumber(number);
        });
    };
    for (var i = 0; i < operatorButtons.length; i++) {
        var button = operatorButtons[i];
        button.addEventListener("click", function(event) {
            displayText(event.target.innerHTML);
            operator = event.target.innerHTML;
        });
    };
    calculateButton.addEventListener("click", function() {
        var answer = calculate(firstNumber, secondNumber, operator);
        displayText(answer);
    });
    resetButton.addEventListener("click", reset);
}

function displayText(text) {
    return display.innerHTML = text;
}

function saveNumber(number) {
    parsedNumber = parseFloat(number);
    if (!firstNumber) {
        firstNumber = parsedNumber;
    } else {
      secondNumber = parsedNumber;
    }
}

function calculate(firstNumber, secondNumber, operator) {
    console.log(firstNumber, operator, secondNumber);
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
        default:
            throw "Incorrect Operator";
    }
}

function reset() {
    var firstNumber, secondNumber, operator = null;
    displayText(0);
}

init();