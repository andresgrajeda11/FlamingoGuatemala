const d = document;

export function digitalClock(clock, play, stop) {
    let clockTempo;

    d.addEventListener("click", (e)=> {
        if (e.target.matches(play)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true;
        }

        if (e.target.matches(stop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(play).disabled = false; 
        }
    })
}

export function sonido(sound, play, stop) {
    let soundTempo;
    let $sonido = d.createElement("audio");
    $sonido.src = sound;

    d.addEventListener("click", (e)=> {

        if (e.target.matches(play)) {
            soundTempo = setTimeout(() => {
                $sonido.play();
            }, 2000);
            e.target.disabled = true;
        }
        if (e.target.matches(stop)) {
            clearTimeout(soundTempo)
            $sonido.pause();
            $sonido.currentTime = 0; //to reset sound back to start
            d.querySelector(play).disabled = false;
        }
    })
}