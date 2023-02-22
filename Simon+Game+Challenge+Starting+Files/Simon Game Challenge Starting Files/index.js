let sequence = [];

let lvl = 0;
let clicks = 0;

$("h1").text("Press any key to start!");

let gameLost = true;

let showing = false;

//BLinks the whole sequence
function showSequence(number) {
    showing = true;
    if (number == sequence.length){
        showing = false;
        return;
    }
    setTimeout(() => {
        blink(sequence[number]);
        showSequence(number+1);
    }, 250);
}

//Generates a new color for the sequence
function addNewSelection() {
    switch (Math.floor(Math.random()*3.8)) {
        case 0:
            sequence.push("green");
            return;
        case 1:
            sequence.push("red");
            return;
        case 2:
            sequence.push("yellow");
            return;
        case 3:
            sequence.push("blue");
            return;
    }
} 

//Plays the correct sound
function makeSound(option) {
    let sound = new Audio("sounds/" + option + ".mp3");
    sound.play();
}

//Blinks a colored button
function blink(option) {
    $("#" + option).addClass("pressed");
    makeSound(option);
    setTimeout(() => {
        $("." + option).removeClass("pressed");
    }, 200); 
}

//Signing button press to start game
$("body").keydown(() => {
    if (lvl != 0 && !gameLost) return;
    gameLost = false;
    sequence = [];
    addNewSelection();
    showSequence(0);
    lvl = 1;
    $("h1").text("Level " + lvl);
})

//Handling click on button
$(".btn").click((event) => {
    if (lvl == 0 || gameLost || showing) {
        return;
    }

    console.log(event);
    
    if (event.target.id != sequence[clicks]) {
        makeSound("wrong");
        gameLost = true;
        $("h1").text("You lost :( ! Press any key to restart!");
    } else {
        blink(sequence[clicks]);
        clicks++;
    }
    
    if (clicks >= lvl) {
        addNewSelection();
        showSequence(0);
        lvl++;
        $("h1").text("Level " + lvl);
        clicks = 0;
    }
} )
