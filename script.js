let audioTurn = new Audio("Sound Effects/click.wav")
let audioWin = new Audio("Sound Effects/win.mp3")
let Turn = 'X'
let gameover = false;

const changeTurn = () => {
    return Turn === 'X' ? 'O' : 'X'
}

const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " WON"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "28vw";
            document.querySelector('.imgbox1').getElementsByTagName('img')[0].style.width = "28vw";
            audioWin.play();
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtexts = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if (boxtexts.innerText === '') {
            boxtexts.innerText = Turn;
            Turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
            }
        }
    })
})

const button = document.querySelector("button");
button.addEventListener("click", () => {
    window.location.reload();
});