var calcNums = document.querySelectorAll('.numbtn div');
for (var i = 0; i < calcNums.length; i++) {
    calcNums[i].addEventListener("click", function(p) { pushToOutput(p.currentTarget.innerText); });
}

var calcOps = document.querySelectorAll('.opsbtns div');
for (var i = 0; i < calcOps.length; i++) {
    calcOps[i].addEventListener("click", function(p) { pushToOutput(p.currentTarget.title); });
}

document.getElementById('equals').addEventListener("click", function() { calculate(); });
document.getElementById('reset').addEventListener("click", function() { reset(); });

function pushToOutput(value) {
    document.getElementById("output").innerText += value;
}

function calculateExpression(expression) {
    try {
        // Use the Function constructor to evaluate the expression
        let result = new Function('return ' + expression)();
        return result;
    } catch (error) {
        return 'Invalid expression';
    }
}
function calculate() {
    var output = document.getElementById("output");
    output.innerText = calculateExpression(output.innerText);
}

function reset() {
    document.getElementById("output").innerText = "";
}

