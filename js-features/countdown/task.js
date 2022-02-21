const p = document.getElementById("timer");

let countDown = () => {
    p.textContent -= 1;
    if (p.textContent < 0) {
        alert ('Вы победили в конкурсе!');
        clearInterval (timing);
    }
}

let timing = setInterval (countDown, 1000)