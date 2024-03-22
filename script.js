// Create eventListener to all the button 
const drumButtons = document.querySelectorAll('button');

drumButtons.forEach((button) => {
    button.addEventListener('click' , () => {
        playSound(button.textContent);
    });

    button.addEventListener('keypress' , (dkey) => {
        playSound(dkey.key);
    });
});


function playSound(key){
    const path = getSound(key);
    const audio = new Audio(path);
    audio.play();
}

function getSound(key){
    switch(key){
        case 'w':
            return 'Audio/w.mp3';
        case 'a' :
            return 'Audio/a.mp3';
        case 's' :
            return 'Audio/s.mp3';
        case 'd' :
            return 'Audio/d.mp3';
        case 'j' :
            return 'Audio/j.mp3';
        case 'k' :
            return 'Audio/k.mp3';
        case 'l' :
            return 'Audio/l.mp3';
    }
}
// All button should be able to play a different sound.