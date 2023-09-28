function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('digital-clock').textContent = timeString;

    if (minutes === 0 && seconds === 0) {
        playPigeonCry();
        changePigeonColor();
    }
 }

function playPigeonCry() {
    const pigeonCry = document.getElementById('pigeon-cry');
    if (pigeonCry) {
        pigeonCry.play();
    }
    
}


function changePigeonColor() {
    const pigeonWindow = document.getElementById('pigeon-character');
    pigeonCharacter.classList.remove("pigeon-character");
    pigeonCharacter.classList.add("pigeon-character-appear");

    setTimeout(() => {
        pigeonCharacter.classList.remove("pigeon-character-appear");
        pigeonCharacter.classList.add("pigeon-character");
    }, 10000); 
}

setInterval(updateClock, 1000);
updateClock();