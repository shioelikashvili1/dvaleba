const calculator = {
    num1: 0,
    num2: 0,
setNumbers: function(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    },
add: function() {
        return this.num1 + this.num2;
    },
subtract: function() {
        return this.num1 - this.num2;
    },
multiply: function() {
        return this.num1 * this.num2;
    },
divide: function() {
        if (this.num2 !== 0) {
            return this.num1 / this.num2;
        } else {
    return 'Cannot divide by zero';
}
    }
};
function performOperations() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let output = '';
    if (isNaN(num1) || isNaN(num2)) {
        output = 'Please enter valid numbers.';
    } else {
        calculator.setNumbers(num1, num2);
        output += `Sum: ${calculator.add()}\n`;
        output += `Difference: ${calculator.subtract()}\n`;
        output += `Product: ${calculator.multiply()}\n`;
        output += `Quotient: ${calculator.divide()}\n`;
    }
    console.log(output);
    document.getElementById('output').textContent = output;
}








let name = prompt("What's your name?");
let lastname = prompt("What's your lastname");

alert(`Hello ${name} ${lastname}!`)