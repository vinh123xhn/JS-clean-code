const ADDITION = '+';
const SUBTRACTION = '-';
const MULTIPLICATION = '*';
const DIVISION = '/';
function calculate(firstOperand, secondOperand, Operand) {
    switch (Operand) {
        case ADDITION:
            return firstOperand + secondOperand;
        case SUBTRACTION:
            return firstOperand - secondOperand;
        case MULTIPLICATION:
            return firstOperand * secondOperand;
        case DIVISION:
            if (secondOperand != 0)
                return firstOperand / secondOperand;
            else
                throw "Can not divide by 0";
        default:
            throw "Unsupported operation";
    }
}

module.exports = calculate;