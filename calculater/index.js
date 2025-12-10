let display = document.getElementById("display");

function press(value) {


    if (value === "clean") {
        display.value = "";
        return;
    }


    if (value === "DEL") {
        display.value = display.value.slice(0, -1);
        return;
    }


    if (value === "calculate") {
        display.value = eval(display.value);
        return;
    }


    display.value += value;
}
