function appendToInput(val) {
    document.getElementById("input").value += val;
}

function clearInput() {
    document.getElementById("input").value = "";
}

function calculate(inputStr) {
    if (!inputStr) {
        return null;
    }
    console.log(inputStr);
    return eval(inputStr);
}

module.exports = {
    calculate: calculate,
};