console.log("jai shir ram");
let tic = document.querySelector('.tictac');
let boxes = document.querySelectorAll('.box');
let h1 = document.getElementsByTagName('h1');
let rbtn = document.getElementById('btn');
let count = 0;

let currentplayer = "X"
let winnercondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function start(e) {

    if (e.target.Classname !== "tictac") {
        if (e.target.innerText === "") {
            e.target.textContent = currentplayer;
            winner();

            if (currentplayer == "X") {
                currentplayer = "0";
            }
            else {
                currentplayer = "X"
            }

        }

    }

}
tic.addEventListener("click", start)
function winner() {

    winnercondition.forEach((item) => {
        let index0 = item[0];
        let index1 = item[1];
        let index2 = item[2];

        let val0 = boxes[index0].innerHTML;
        let val1 = boxes[index1].innerHTML;
        let val2 = boxes[index2].innerHTML;
        // console.log(index0 , val0, index1, val1,index2,val2);
        if (val0 !== "" && val1 !== "" && val2 !== "") {
            if (val0 === val1 && val0 === val2) {
                boxes[index0].classList.add("winwwerclass");
                boxes[index1].classList.add("winwwerclass");
                boxes[index2].classList.add("winwwerclass");
                h1[0].innerText = `GAME OVER Winner is ${val0}`
                tic.removeEventListener('click', start);

            }

        }

    })
}

rbtn.addEventListener('click', () => {
    h1[0].innerText = "Tic Tac Teo"
    boxes.forEach(item => {
        item.innerText = "";
        item.classList.remove("winwwerclass")
    })
    tic.addEventListener("click", start)

})
// console.log("hello");
