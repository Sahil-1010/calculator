function appendNumber(num) 
{
    document.getElementById("display").value += num;
}

function appendOperator(operator) 
{
    var displayValue = document.getElementById("display").value;
    var lastChar = displayValue[displayValue.length - 1];
    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/'&&lastChar !== '%') 
    {
        document.getElementById("display").value += operator;
    }
}

function calculate() 
{
    var expression = document.getElementById("display").value;
    var result = eval(expression);
    document.getElementById("display").value = result;
}

function clearDisplay() 
{
    document.getElementById("display").value = "";
}
function backspace() 
{
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
}