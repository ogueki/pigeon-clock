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
    const pigeonWindow = document.getElementById('pigeon');
    pigeonWindow.style.color = 'white'; 

    setTimeout(() => {
        pigeonWindow.style.color = 'black'; 
    }, 10000); 
}

setInterval(updateClock, 1000);
updateClock();