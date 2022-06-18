var numOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var drumInnerHTML = this.innerHTML;
        buttonAnimation(drumInnerHTML);
        switch (drumInnerHTML) {
            case "d1":
                var audio = new Audio("/music_launchpad/sounds/Drums/drum1.mp3");
                audio.play();
                break;
            case "d2":
                var audio = new Audio("/music_launchpad/sounds/Drums/drum2.mp3");
                audio.play();
                break;
            case "d3":
                var audio = new Audio("/music_launchpad/sounds/Drums/drum3.mp3");
                audio.play();
                break;
            case "d4":
                var audio = new Audio("/music_launchpad/sounds/Drums/drum4.mp3");
                audio.play();
                break;
            case "d5":
                var audio = new Audio("/music_launchpad/sounds/Drums/drum5.mp3");
                audio.play();
                break;
        }
    });
}
var numOfSnares = document.querySelectorAll(".snare").length;
for (var i = 0; i < numOfSnares; i++) {
        document.querySelectorAll(".snare")[i].addEventListener("click", function () {
        var snareInnerHTML = this.innerHTML;
        buttonAnimation(snareInnerHTML);
        switch (snareInnerHTML) {
            case "s1":
                var audio = new Audio("/music_launchpad/sounds/Snares/snare1.wav");
                audio.play();
                break;
            case "s2":
                var audio = new Audio("/music_launchpad/sounds/Snares/snare2.wav");
                audio.play();
                break;
            case "s3":
                var audio = new Audio("/music_launchpad/sounds/Snares/snare3.wav");
                audio.play();
                break;
            case "s4":
                var audio = new Audio("/music_launchpad/sounds/Snares/snare4.wav");
                audio.play();
                break;
            case "s5":
                var audio = new Audio("/music_launchpad/sounds/Snares/snare5.wav");
                audio.play();
                break;
        }
    });
}
var numOfBeats = document.querySelectorAll(".beat").length;
for (var i = 0; i < numOfBeats; i++) {

    document.querySelectorAll(".beat")[i].addEventListener("click", function () {
        var beatInnerHTML = this.innerHTML;
        buttonAnimation(beatInnerHTML);
        switch (beatInnerHTML) {
            case "b1":
                var audio = new Audio("/music_launchpad/sounds/Beats/beat1.wav");
                audio.play();
                break;
            case "b2":
                var audio = new Audio("/music_launchpad/sounds/Beats/beat1.wav");
                audio.play();
                break;
            case "b3":
                var audio = new Audio("/music_launchpad/sounds/Beats/beat2.wav");
                audio.play();
                break;
            case "b4":
                var audio = new Audio("/music_launchpad/sounds/Beats/beat3.wav");
                audio.play();
                break;
            case "b5":
                var audio = new Audio("/music_launchpad/sounds/Beats/beat5.wav");
                audio.play();
                break;
        }
    });
}

function buttonAnimation(curKey){
    var activeButton=document.querySelector("."+curKey);
    activeButton.classList.add("pressed");
}