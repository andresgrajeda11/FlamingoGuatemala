

const d = document;

let x = 0, y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball), 
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

    /*console.log(e.keyCode);
    console.log(e.key);
    console.log(limitsBall, limitsStage);*/

    //const move = (direction) => {}

    switch (e.keyCode) {
        case 37:
            //move("left");
            if(limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--;}
            break;
        case 38:
            //move("up");
            if(limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;}
            break;
        case 39:
            //move("right");
            if(limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;}
            break;
        case 40:
            //move("down");
            if(limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;}
            break;
    
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

export function shortcuts(e) {
   /* console.log(e);
    console.log(e.type);
    console.log(e.key);
    
    console.log(`Ctrl: ${e.ctrlKey}`);
    console.log(`Alt: ${e.altKey}`);
    console.log(`Shift: ${e.shiftKey}`);*/

    if (e.key === "a" && e.altKey) {
        alert(`Haz mostrado una alerta desde el teclado`);
    }
    if (e.key === "c" && e.altKey) {
        confirm(`Haz mostrado una confirmacion desde el teclado`);
    }
    if (e.key === "p" && e.altKey) {
        prompt(`Haz mostrado un aviso desde el teclado`);
    }
}

