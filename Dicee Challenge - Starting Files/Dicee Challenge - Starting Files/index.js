
function randomNumber() {
    return Math.ceil(Math.random() * 6);
}

function selImg(number) {
    switch (number) {
        case 1:
            return "images/dice1.png";
        case 2:
                return "images/dice2.png";
        case 3:
            return "images/dice3.png";
        case 4:
            return "images/dice4.png";
        case 5:
            return "images/dice5.png";
        case 6:
            return "images/dice6.png"
    }
}

function TitleText () {
    if (d1 > d2) {
        return "Player 1 wins!"
    }
    else if (d1 < d2) {
        return "Player 2 wins!"
    }else {
        return "It's a draw!"
    }
}

const d1 = randomNumber();

const d2 = randomNumber();

let dices = document.querySelectorAll(".dice img");

dices[0].setAttribute("src", selImg(d1));

dices[1].setAttribute("src", selImg(d2));

document.querySelector("h1").innerText = TitleText();