let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let maxEl = document.getElementById("max-el");
let count = 0;
let numberClicks = 0;
let maxClicks = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    numberClicks += count;
    totalEl.textContent = `Total de cliques: ` + numberClicks;
    if (maxClicks < count) {
        maxClicks = count;
    }
    maxEl.textContent = `Recorde de cliques por entrada: ` + maxClicks;
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}