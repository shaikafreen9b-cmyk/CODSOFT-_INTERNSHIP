let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);
        display.value = result;

        // Add to history
        let li = document.createElement("li");
        li.textContent = expression + " = " + result;
        historyList.prepend(li);

    } catch {
        display.value = "Error";
    }
}