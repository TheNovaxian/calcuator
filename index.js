function addtoDisplay(input) {
    let display = document.getElementById("display");
    display.value += input;
}

function clearDisplay() {
    let display = document.getElementById("display");
    display.value = "";
}

function calculate() {
    let display = document.getElementById("display");
 
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}