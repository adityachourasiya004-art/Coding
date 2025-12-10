console.log("jai shree rammm")

const dis = document.getElementById("display");
let range = document.getElementById("range");
let btn = document.getElementById("button");
let cap = document.getElementById("capital");
let sm = document.getElementById("small");
let no = document.getElementById("number");
let sy = document.getElementById("symbol");

const p = document.getElementById("p");
p.innerHTML = range.value;

range.addEventListener('input', function () {
    p.innerHTML = range.value;
});

function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

btn.addEventListener('click', function () {
    

    let large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = "abcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let sym = "!@#$%^&*><?";

    let option = "";

    if (cap.checked) option += large;
    if (sm.checked) option += small;
    if (no.checked) option += num;
    if (sy.checked) option += sym;

    if (option.length == 0) {
        alert("Select options!");
        return;
    }

    let finalstr = "";

    for (let i = 0; i < range.value; i++) {
        finalstr += option[random(option.length - 1)];
    }

    dis.innerHTML = finalstr;
});
