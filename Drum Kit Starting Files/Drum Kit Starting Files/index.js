function handleClick() {
    alert("I got clicked");

}

let buttons = document.querySelectorAll("button");

function makeSound(key) {
    switch (key)  {
        case 'w':
                audioFile = "sounds/crash.mp3";
                break;
            case 'a':
                audioFile = "sounds/kick-bass.mp3";
                break;
            case 's':
                audioFile= "sounds/snare.mp3";
                break;
            case 'd':
                audioFile = "sounds/tom-1.mp3";
                break;
            case 'j':
                audioFile = "sounds/tom-2.mp3";
                break;
            case 'k':
                audioFile = "sounds/tom-3.mp3";
                break;
            case 'l':
                audioFile = "sounds/tom-4.mp3";
                break;
            default:
                return;
    }
    var audio = new Audio(audioFile);
    audio.play();
}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.toggle("pressed");

    setTimeout(() => {
        document.querySelector("." + key).classList.toggle("pressed");
    }, 50) ;
}

for (let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", () => {

        makeSound(buttons[i].innerText);

        buttonAnimation(buttons[i].innerText);
    });

}

document.addEventListener("keydown", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
});

